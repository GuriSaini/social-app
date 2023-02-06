const mongoose = require("mongoose");

mongoose.connect(process.env.DB);
mongoose.set("strictQuery", true);
const connection = mongoose.connection;

exports.default = connection;
