const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./backend/routes/authRoutes'); // Importando as rotas de autenticação
const questionRoutes = require('./backend/routes/questionRoutes'); // Importando as rotas de questões
const app = express();

// Middleware para parsear o corpo da requisição
app.use(bodyParser.json());

// Rotas
app.use('/auth', authRoutes);  // As rotas de autenticação estarão disponíveis em '/auth'
app.use('/questions', questionRoutes);  // Rota para questões

// Inicia o servidor
const port = 3001;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
