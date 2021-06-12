const authorization = (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token);
  if(token && /[\d\w]{16}/.test(token)) {
    next();
  } else {
    next({ code: 401, response: 'Token inválido'})
  }
};

module.exports = authorization;
