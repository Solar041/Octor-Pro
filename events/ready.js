module.exports.run = async (client) => {
  console.log(`${client.user.tag} has logged in.`);
  client.user.setActivity(`609 Project(s) | Aditya Codez`, {
    type: "WATCHING",
  });
};
