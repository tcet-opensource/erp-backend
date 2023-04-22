const jwt = require('jsonwebtoken');
const { decrypt } = require('../util')

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401);

  try {
    const payload = jwt.verify(token, process.env.TOKEN_SECRET);
    const decryptedIP = decrypt(payload.ip);
    if (decryptedIP !== req.ip) {
      res.status(403)
      res.send({err:"Unauthorized"});
    }

    req.user = payload.data;
    next();
  } catch (error) {
    res.status(403)
    res.send({err:"Unauthorized"});
  }
}

module.exports = authenticateToken;