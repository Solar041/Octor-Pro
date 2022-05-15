const ButtonPages = require('discord-button-pages');
const { MessageEmbed } = require('discord.js')
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js");
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");

module.exports = {
  name: "help",
  description: "Shows all commands of the bot",
  category: "uptime",
  botPermission: [],
  authorPermission: [],
  ownerOnly: false,
  run: async (client, message, args) => {
    let helpEmbed = new MessageEmbed()
      .setTitle("<a:uptime:968083388877660160> __**OctorPro Help Panel**__ <a:uptime:968083388877660160>")
      .setDescription("<a:notificationbell:967350121652187166> __**OctorPro**__ **It is one of the powerful bot that Make Your Replit / Glitch / Website 24/7 For Free** \n\n  <a:hydroxTrophy:964462897663205376> **OCTOR COMMANDS** \n\n  `add` `serverlist`  `feedback` ` info`  `ping`  `projects`  `remove` ` stats`  `total` `howtouse`")
      
      .setThumbnail(client.user.displayAvatarURL())
    .setImage("https://share.creavite.co/pdY660OOjo5xbYpw.gif")
      .setFooter("OctorPro | + ")

      let button1 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('❤️ Invite Me') 
      .setURL("https://discord.com/api/oauth2/authorize?client_id=962680185730261062&permissions=8&scope=bot");
      let button2 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('❓ Support Server') 
      .setURL("https://discord.gg/PwpuQ7JR");
      let button3 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('💙 Donate') 
      .setURL("https://www.patreon.com/");


      return message.channel.send(helpEmbed,{
        button: [button1,button2,button3],
      });

  },
};