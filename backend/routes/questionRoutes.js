// backend/routes/questionRoutes.js
const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questionController');
const authMiddleware = require('../middlewares/authMiddleware');

// Rota para adicionar questões (somente autenticado)
router.post('/add', authMiddleware, questionController.addQuestion);

// Rota para obter todas as questões (pode ser pública ou protegida, dependendo da sua necessidade)
router.get('/', questionController.getQuestions);

module.exports = router;
