const Discord = require('discord.js'); //Requiring Discord.js module.
const DiscordButtons = require('discord-buttons'); //Requiring Discord-BUttons module.
const { MessageEmbed } = require('discord.js')
let button = require('discord-buttons');

module.exports = {
  name: "howtouse",
  aliases: ["howto"],
  usage: "*howtouse",
  description: "How to use bot",
  run: async (client, message, args) => {
    let firstbutton = new button.MessageButton()
      .setLabel("𝕊𝕥𝕖𝕡 𝟙")
      .setStyle("blurple")
      .setID("firstbutton")
    let secondbutton = new button.MessageButton()
      .setLabel("𝕊𝕥𝕖𝕡 𝟚")
      .setStyle("blurple")
      .setID("secondbutton")
    let thirdbutton = new button.MessageButton()
      .setLabel("𝕊𝕥𝕖𝕡 𝟛")
      .setStyle("blurple")
      .setID("thirdbutton")

    //button row:
    let row1 = new button.MessageActionRow()
      .addComponent(firstbutton)
      .addComponent(secondbutton)
      .addComponent(thirdbutton)



    //embed create


    const step1 = new MessageEmbed()
      .setColor("YELLOW")
      .setTitle("<a:7824bluebook:965144275404877864> How to Use Octor!")
      .addField(
        "<a:7824bluebook:965144275404877864>  First Make A Web For Your Project By Using This Code.", "Then Click The Below Button's For More Info."
      )
      .setImage("https://share.creavite.co/y7LbP5rIOP3Ojktm.gif")
    return message.channel.send({
      embed: step1,
      components: [row1],

    });
  }
}