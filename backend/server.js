const express = require('express');
const cors = require('cors');  // Importando CORS
const authRoutes = require('./routes/authRoutes');  // Importando as rotas de autenticação
const questionRoutes = require('./routes/questionRoutes');  // Importando as rotas de questões
require('dotenv').config();  // Carregar variáveis de ambiente

const app = express();

// Middleware para parsear o corpo da requisição
app.use(express.json());  // Substitui body-parser

// Middleware para habilitar CORS (se necessário)
app.use(cors());  // Permite solicitações de diferentes origens (domínios)

// Rotas
app.use('/auth', authRoutes);  // As rotas de autenticação estarão disponíveis em '/auth'
app.use('/questions', questionRoutes);  // Rota para questões

// Middleware de tratamento de erros
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Erro interno do servidor' });
});

// Inicia o servidor
const port = process.env.PORT || 3001;  // Permite definir a porta via variável de ambiente
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});










