const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Rota para obter todos os simulados
router.get('/', async (req, res) => {
  try {
    const [simulados] = await db.query('SELECT * FROM simulados');
    res.json(simulados);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao buscar simulados' });
  }
});

// Rota para obter um simulado específico com questões
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [simulado] = await db.query('SELECT * FROM simulados WHERE id = ?', [id]);
    if (simulado.length === 0) {
      return res.status(404).json({ message: 'Simulado não encontrado' });
    }

    const [questoes] = await db.query(
      `SELECT q.id, q.enunciado, q.alternativa_a, q.alternativa_b, q.alternativa_c, q.alternativa_d, q.alternativa_e 
       FROM questoes q
       INNER JOIN simulado_questoes sq ON q.id = sq.questao_id
       WHERE sq.simulado_id = ?`,
      [id]
    );

    res.json({
      titulo: simulado[0].titulo,
      questoes: questoes
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao buscar simulado' });
  }
});

module.exports = router;
