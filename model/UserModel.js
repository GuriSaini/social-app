const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isBlock: {
      type: String,
      enum: ["0", "1"],
      default: "0",
    },
    isVerified: {
      type: String,
      enum: ["0", "1"],
      default: "0",
    },
    isStatus: {
      type: String,
      enum: ["deleted", "active"],
      default: "active",
    },
  },
  { timestamps: true }
);
 const User = mongoose.model("user", UserSchema);
 module.exports = User
