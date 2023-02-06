const User = require("../model/UserModel");
const { encryptPassword, decryptPassword } = require("../utlis/crypto");
const { gernateToken } = require("../utlis/jwt");
async function create(body) {
  const hashPassword = await encryptPassword(body.password);
  const user = new User({ ...body, password: hashPassword });
  const result = await user.save();
  return result;
}

async function login(body) {
  const user = await User.findOne({ email: body.email });
  if (!user) throw new Error("User not found");

  const isCheckPassword = await decryptPassword(body.password, user.password);
  if (!isCheckPassword) throw new Error("Password not matched.");
  const token = await gernateToken(user);
  const newResponse = { ...user._doc, token };
  delete newResponse.password;

  return newResponse;
}

async function changePassword(body, user) {
  const getUser = await User.findOne({ id: user.id });
  if (!getUser) throw new Error("User not found");

  const isCheckPassword = await decryptPassword(
    body.oldPassword,
    getUser.password
  );

  if (!isCheckPassword) throw new Error("Password not matched.");
  const hashPassword = await encryptPassword(body.newPassword);
  await User.updateOne({id:user._id},{
    $set:{
        password:hashPassword
    }
  })
  return true
}

exports.create = create;
exports.login = login;
exports.changePassword = changePassword;
