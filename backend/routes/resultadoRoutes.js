const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Rota para salvar um resultado
router.post('/', async (req, res) => {
  const { usuario_id, simulado_id, acertos, total_questoes } = req.body;

  try {
    await db.query(
      'INSERT INTO resultados (usuario_id, simulado_id, acertos, total_questoes) VALUES (?, ?, ?, ?)',
      [usuario_id, simulado_id, acertos, total_questoes]
    );
    res.json({ message: 'Resultado salvo com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao salvar resultado' });
  }
});

// Rota para obter o resultado de um usuário
router.get('/:usuario_id', async (req, res) => {
  const { usuario_id } = req.params;

  try {
    const [resultados] = await db.query(
      `SELECT r.id, s.titulo, r.acertos, r.total_questoes, r.data_realizacao
       FROM resultados r
       INNER JOIN simulados s ON r.simulado_id = s.id
       WHERE r.usuario_id = ?`,
      [usuario_id]
    );

    res.json(resultados);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao buscar resultados' });
  }
});

module.exports = router;
