const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    jwt.verify(token, process.env.JWT_SEC, (error, user) => {
      if (error) res.status(403).json("Token no es valido!");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("No estas autenticado!");
  }
};

const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
        if(req.user.id === req.params.id || req.user.isAdmin){
          next()
        }else {
            res.status(403).json("No tienes permisos para esta accion!");
        }
    })
}

module.exports = {verifyToken, verifyTokenAndAuthorization};