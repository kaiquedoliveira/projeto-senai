// backend/models/question.js
const connection = require('../config/db');

// Função para salvar uma nova questão
const saveQuestion = (enunciado, alternativas, resposta) => {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO questions (enunciado, alternativas, resposta) VALUES (?, ?, ?)';
    connection.execute(query, [enunciado, alternativas, resposta], (err, results) => {
      if (err) {
        reject(err);
      }
      resolve(results);
    });
  });
};

// Função para obter todas as questões
const getAllQuestions = () => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM questions';
    connection.execute(query, [], (err, results) => {
      if (err) {
        reject(err);
      }
      resolve(results);
    });
  });
};

module.exports = { saveQuestion, getAllQuestions };


// frontend/js/question.js
async function fetchQuestions() {
    const response = await fetch('http://localhost:3001/questions');
    const data = await response.json();
    const questionsList = document.getElementById('questionsList');
    
    data.questions.forEach(question => {
      const li = document.createElement('li');
      li.textContent = question.enunciado;  // Exibindo apenas o enunciado
      questionsList.appendChild(li);
    });
  }
  
  // Carregar as questões ao carregar a página
  window.onload = fetchQuestions;
  