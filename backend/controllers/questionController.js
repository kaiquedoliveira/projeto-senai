// backend/controllers/questionController.js

// Simulação de banco de dados para questões
let questions = [];

// Função para adicionar uma questão
exports.addQuestion = (req, res) => {
  const { pergunta, alternativa1, alternativa2, alternativa3, alternativa4, alternativaCorreta } = req.body;

  // Verifica se todos os campos necessários estão presentes
  if (!pergunta || !alternativa1 || !alternativa2 || !alternativa3 || !alternativa4 || !alternativaCorreta) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
  }

  const newQuestion = {
    id: questions.length + 1,
    pergunta,
    alternativa1,
    alternativa2,
    alternativa3,
    alternativa4,
    alternativaCorreta
  };

  questions.push(newQuestion);
  res.status(201).json({ message: 'Questão adicionada com sucesso', question: newQuestion });
};

// Função para obter todas as questões
exports.getQuestions = (req, res) => {
  res.status(200).json({ questions });
};
