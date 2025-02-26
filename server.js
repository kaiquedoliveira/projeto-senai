const express = require('express');
const cors = require('cors');
const authRoutes = require('./backend/routes/authRoutes');
const questionRoutes = require('./backend/routes/questionRoutes');
const simuladoRoutes = require('./backend/routes/simuladoRoutes');  // Importando rotas de simulados
const resultadoRoutes = require('./backend/routes/resultadoRoutes'); // Importando rotas de resultados

const app = express();

app.use(express.json());
app.use(cors());

app.use('/auth', authRoutes);
app.use('/questions', questionRoutes);
app.use('/simulados', simuladoRoutes);  // Adicionando a rota de simulados
app.use('/resultados', resultadoRoutes); // Adicionando a rota de resultados

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Erro interno do servidor' });
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
