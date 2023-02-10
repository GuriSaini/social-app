const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose.connect(process.env.DB);

const connection = mongoose.connection;

exports.default = connection;
