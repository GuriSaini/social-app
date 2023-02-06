const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
mongoose.set('useNewUrlParser', true);
mongoose.connect(process.env.DB);

const connection = mongoose.connection;

exports.default = connection;
