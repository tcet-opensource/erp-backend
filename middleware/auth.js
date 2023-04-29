import jwt from "jsonwebtoken";

async function authenticateToken(req, res, next) {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);
  const user = await jwt.verify(token, process.env.TOKEN_SECRET, (err, tokenData) => {
    if (err) return res.sendStatus(403);
    return tokenData;
  });
  req.user = user;
  next();
  return false;
}

export default { authenticateToken };
