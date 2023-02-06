const bcrypt = require('bcrypt');
const saltRounds = 10;
async function encryptPassword(password){
   const hash = await bcrypt.hash(password, saltRounds)
   return hash
}
async function decryptPassword(password,hashPassword) {
    const match = await bcrypt.compare(password,hashPassword);
    return match
}

exports.encryptPassword = encryptPassword
exports.decryptPassword = decryptPassword