const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; // Extraí o token do header 'Authorization'
  
  if (!token) {
    return res.status(403).json({ message: 'Token não fornecido' });
  }

  jwt.verify(token, 'seu_segredo', (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Token inválido' });
    }
    req.user = decoded; // Adiciona os dados do usuário ao objeto 'req'
    next(); // Chama o próximo middleware ou rota
  });
};
