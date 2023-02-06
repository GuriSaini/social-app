const { create, login, changePassword } = require("../services/userService");
async function createUser(req, res) {
  try {
    const response = await create(req.body);
    return res.status(201).json({
      status: true,
      message: "User created successfully.",
      data: response,
    });
  } catch (error) {
    return res.status(400).json({
      status: false,
      message: error.message,
    });
  }
}

async function loginUser(req, res) {
  try {
    const response = await login(req.body);
    return res.status(200).json({
      status: true,
      message: "Login user successfully.",
      data: response,
    });
  } catch (error) {
    return res.status(400).json({
      status: false,
      message: error.message,
    });
  }
}

async function changeUserPassword(req,res){
    try {
        const response = await changePassword(req.body,req.user);
        return res.status(200).json({
          status: true,
          message: "Password changed successfully.",
          data: response,
        });
      } catch (error) {
        return res.status(400).json({
          status: false,
          message: error.message,
        });
      }
}

exports.createUser = createUser;
exports.loginUser = loginUser;
exports.changeUserPassword = changeUserPassword;
