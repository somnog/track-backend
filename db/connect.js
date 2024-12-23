const mongoose = require("mongoose");

const dbUrl = process.env.DB_URL;
const dbConnect = () => {
  mongoose
    .connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connect db"));
  // .then(err => console.log('error in connect', err))
};

module.exports = dbConnect;
