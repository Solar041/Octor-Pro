require("http").createServer((req, res) => res.end("xd is OP LOVE U")).listen(process.env.PORT || 8080)
require("dotenv").config();
const { Client, Collection } = require("discord.js");
const UrlsConfig = require("./database/models/UrlsConfig");
const fetchProjects = require("./fetchProjects");
const { timeout, disable_fetching } = require("./config.json");
const { MessageMenuOption, MessageMenu } = require("discord-buttons")
const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js'); //Requiring Discord.js module.
const DiscordButtons = require('discord-buttons'); //Requiring Discord-BUttons module.
const button = require('discord-buttons');
const disbut = require("discord-buttons")
const Nuggies = require('nuggies');
Nuggies.connect("mongodb+srv://neon:neon@2022@cluster0.rsjpl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
const client = new Client({
  disableEveryone: true,
});
disbut(client);

(async () => {
  await require("./database/connect")();

  let pros = await UrlsConfig.find();

  client.commands = new Collection();
  client.aliases = new Collection();
  client.projectsSize = 0;
  client.projects = pros.map((p) => p.projectURL);
  UrlsConfig.countDocuments({}, async (err, total) => {
    client.projectsSize = total;

    ["command", "events"].forEach((handler) => {
      require(`./handlers/${handler}`)(client);
    });

    await client.login("OTYyNjgwMTg1NzMwMjYxMDYy.YlLDyg.zuYRE9xqQ4jc0DY0Z3xWSryXIHc");

    if (!disable_fetching) fetchProjects(client.projects, client);
  });
})();

//create buttons
let firstbutton = new disbut.MessageButton()
  .setLabel("Step 1")
  .setStyle("blurple")
  .setID("firstbutton")
let secondbutton = new disbut.MessageButton()
  .setLabel("Step 2")
  .setStyle("blurple")
  .setID("secondbutton")
let thirdbutton = new disbut.MessageButton()
  .setLabel("Step 3")
  .setStyle("blurple")
  .setID("thirdbutton")
let row1 = new disbut.MessageActionRow()
  .addComponent(firstbutton)
  .addComponent(secondbutton)
  .addComponent(thirdbutton)
const step1 = new MessageEmbed()
  .setColor("YELLOW")
  .setTitle("<a:questionjaune:963945012129849404> How to Use Octor!")
  .addField(
    "<a:7824bluebook:965144275404877864>  First Make A Web For Your Project By Using This Code.", "Then Click The Below Button's For More Info"
  )
  .setImage("https://share.creavite.co/pdY660OOjo5xbYpw.gif")
const step2 = new MessageEmbed()
  .setColor("YELLOW")
  .setTitle("<a:questionjaune:963945012129849404> How to Use Octor!")
  .addField(
    "<:data:963945014206025728> Add Your Project Url With The Following Cmd's", "Now that we have added your project, you can use other command such as `projects` `remove` `stats` and `total`."
  )
  .setImage("https://share.creavite.co/pdY660OOjo5xbYpw.gif")
const step3 = new MessageEmbed()
  .setColor("YELLOW")
  .setTitle("<a:questionjaune:963945012129849404> How to Use Occtor!")
  .addField(
    "<a:lnc_settings:967332876007931964>  ", "Next step is to run the command. The syntax of this command is `+add <repl_url>`. If done correcty the bot should give embed saying: <a:DCAFE_TICK:967345653552398347>  Added Succesfully!"
  )
  .setImage("https://share.creavite.co/pdY660OOjo5xbYpw.gif");


// Button Handler
client.on("clickButton", async (button) => {
  if (button.id === "firstbutton") {
    button.message.edit({
      embed: step1,
      component: row1,
    });
  } else if (button.id === "secondbutton") {

    button.message.edit({
      embed: step2,
      component: row1,
    });
  } else if (button.id === "thirdbutton") {
    button.message.edit({
      embed: step3,
      component: row1,
    });

  }
})
// pinging
setInterval(async () => {
  UrlsConfig.countDocuments({}, (err, total) => {
    client.projectsSize = total;
    client.user.setActivity(`${total} | +help`, {
      type: "PLAYING",
    });
  });



  if (!disable_fetching) fetchProjects(client.projects, client);
}, timeout);

////////////Ping Cmd///////////////////
client.on('message', message => {
    if (message.mentions.has(client.user)) {
        message.channel.send(new Discord.MessageEmbed()
        .setTitle(`Huh? I Got Pinged?!`)
        .setDescription('Hello! I\'m OctorPro A Free Uptimimg Monitor Need Help Just Use `+help`.')
                             .setImage("https://share.creavite.co/pdY660OOjo5xbYpw.gif")
        .setColor(`YELLOW`)
        .setFooter(`Thanks for adding me! :)`));
    }
});
////////////////////////////////////////////

/**********************************************************
 * @INFO
 * Bot Coded by SoLaRッᵈᵉᵛ#0001 | https://dsc.gg/moondev.xyz/
 * @INFO
 * Work for Moon Development | https://moondev.ga/
 * @INFO
 * Please Mention Us Moon Development, When Using This Code!
 * @INFO
 *********************************************************/