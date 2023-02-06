var jwt = require('jsonwebtoken');

async function gernateToken(user){
  const token =  await jwt.sign({
    data: user
  }, 'S1fnF0xQTjem8erXls988Q==', { expiresIn: '1h' });
   return token
}

async function decodeToken(token){
    var decoded = jwt.verify(token, 'S1fnF0xQTjem8erXls988Q==');
    return decoded
}

exports.gernateToken = gernateToken
exports.decodeToken = decodeToken