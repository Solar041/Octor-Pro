const { MessageEmbed } = require("discord.js");
const { invite_link } = require("./../../config.json");
const { MessageButton } = require("discord-buttons")

module.exports = {
  name: "invite",
  description: "*Invites The Bot*",
  category: "uptime",
  aliases: ["inv", "in", "invitebot"],
  botPermission: [],
  authorPermission: [],
  ownerOnly: false,
  run: async (client, message, args) => {
    let github_repo = "";


    let mybutton = new MessageButton() // prettier
      .setStyle('url').setLabel("Invite Link").setURL("https://discord.com/api/oauth2/authorize?client_id=878493925902520360&permissions=8&scope=bot%20applications.commands") // XDD Change this
    let mybutton1 = new MessageButton() // prettier
      .setStyle('url').setLabel("Support Server").setURL("https://discord.gg/z6RMrphPXE") // XDD Change this
    //array of all buttons
      const allbuttons = [mybutton, mybutton1]


    return message.channel.send({
        embed: new MessageEmbed()
      .setTitle("Invite Me / Support Me.")
      .setDescription(
        "**Uptimer** Is a  Discord Bot That Allows You To Make Your Projects Oline 24/7 Just By Using A Single Command."
      )
      //.setColor("#a1eb34")
      .setColor("RANDOM")
      .addField(
        ":link: **Invite Me**",
        "[Click here](https://discord.com/api/oauth2/authorize?client_id=878493925902520360&permissions=8&scope=bot%20applications.commands) To Invite Me To Your Server."
      )
      .addField(
        ":link: **Support Server**",
        "[Click here](https://discord.gg/z6RMrphPXE) To Join Our Support Server."
      )
      .setTimestamp()
      ,
        buttons: allbuttons
      });
  },
};