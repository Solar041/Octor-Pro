const mongoose = require("mongoose");

async function connect() {
  mongoose.connect("mongodb+srv://neon:neon@2022@cluster0.rsjpl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });

  mongoose.connection.once("open", () => {
    console.log("Connected to Database");
  });
  return;
}

module.exports = connect;
