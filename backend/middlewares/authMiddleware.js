const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization');
  
  if (!token) {
    return res.status(401).json({ message: 'Acesso negado. Token não fornecido.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Aqui você anexa as informações do usuário ao request
    next();  // Chama a próxima função (a rota)
  } catch (error) {
    return res.status(400).json({ message: 'Token inválido' });
  }
};

module.exports = authMiddleware;
