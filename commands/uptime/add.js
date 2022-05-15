const UrlsConfig = require("./../../database/models/UrlsConfig");
const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
const validUrl = require("valid-url");

module.exports = {
  name: "add",
  description: "Adds monitor to your project.",
  aliases: ["host"],
  category: "uptime",
  botPermission: [],
  authorPermission: [],
  ownerOnly: false,
  run: async (client, message, args) => {
    var url = args[0];

    // CHECKS THE URL IF PROVIDED OR WRONG
    if (!url) return message.reply("<a:cross_no2:967345655062343730> Please provide a project url!");
    if (!validUrl.isUri(url)) {
      return message.channel.send("<a:cross_no2:967345655062343730> Please provide a vaild url!");
    }

    // LOADING
    let waitEmbed = new MessageEmbed().setDescription(
      "<a:thinkloading:962954367714095104> Please wait..."
    );
    var messageAlert = await message.channel.send(message.author, waitEmbed);

    // CHECKS IF THE PROJECT IS ALREADY REGISTERED
    var checkIfExsists = await UrlsConfig.findOne({
      projectURL: url,
    });

    if (checkIfExsists === null) {
      // RUNS WHEN PROJECT IS NOT REGISTERED
      await UrlsConfig.create({
        authorID: message.author.id,
        projectURL: url,
        pinged: 0,
      }).then(async () => {
        // RUNS AFTER THE PROJECT STORES THE DATA IN DATABASE
        client.projects.push(url);
        try {
          // TRIES TO PING PROJECT
          await fetch(url);
        } catch (e) {
          // ERRORS HANDLING
          await UrlsConfig.findOneAndUpdate(
            { projectURL: url },
            { error: true, errorText: e.message },
            { new: true }
          );
          message.reply("<a:warningbug:963944992689258516> Fetching Error");
        }

        // NOTIFIES WITH AN EMBED THAT PROJECT IS SUCCESSFULLY REGISTERED
        let embed = new MessageEmbed()
          .setTitle("<a:DCAFE_TICK:967345653552398347> Added Succesfully!")
          .setDescription("<a:redheart:964825292403277834> Thanks for using me")
          .setColor("YELLOW")
          .setTimestamp();
        await messageAlert.edit(embed);
        return message.delete();
      });
    } else {
      // RUNS WHEN THE PROJECT IS ALREADY IN DATABASE
      let embed = new MessageEmbed()
        .setTitle(
          "<a:cross_no2:967345655062343730>  Project is already Registered!"
        )
        .setDescription(
          "The project you're trying to register is already in the Database"
        )
        .setColor("YELLOW")
        .setTimestamp();

      await messageAlert.edit(embed);
      return message.delete();
    }
  },
};
