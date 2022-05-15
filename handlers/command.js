const { readdirSync } = require("fs");
const ascii = require("ascii-table");
const { Client } = require("discord.js");
let table = new ascii("Commands");
table.setHeading("Command Name", "Loaded Status");
/**
 * Command Handler
 * @param {Client} client
 */
module.exports = (client) => {
  readdirSync("./commands/").forEach((dir) => {
    const commands = readdirSync(`./commands/${dir}/`).filter((file) =>
      file.endsWith(".js")
    );
    for (let file of commands) {
      let pull = require(`../commands/${dir}/${file}`);
      if (pull.name) {
        client.commands.set(pull.name, pull);
        table.addRow(pull.name, "✅");
      } else {
        table.addRow(
          pull.name,
          `❌  -> missing a help.name, or help.name is not a string.`
        );
        continue;
      }
      if (pull.aliases && Array.isArray(pull.aliases))
        pull.aliases.forEach((alias) => client.aliases.set(alias, pull.name));
    }
  });
  console.log(table.toString());
};

/**********************************************************
 * @INFO
 * Bot Coded by SoLaRッᵈᵉᵛ#0001 | https://dsc.gg/moondev.xyz/
 * @INFO
 * Work for Moon Development | https://moondev.ga/
 * @INFO
 * Please Mention Us Moon Development, When Using This Code!
 * @INFO
 *********************************************************/
