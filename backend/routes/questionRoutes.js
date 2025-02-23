const express = require('express');
const router = express.Router(); // Definindo corretamente o router
const connection = require('../config/db'); // Certifique-se de que o caminho está correto

// Rota para obter um simulado específico com suas questões
router.get('/:id', (req, res) => {
  const simuladoId = req.params.id;

  // Consulta para obter o simulado
  const querySimulado = 'SELECT * FROM simulados WHERE id = ?';
  connection.execute(querySimulado, [simuladoId], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Erro ao buscar simulado' });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'Simulado não encontrado' });
    }

    const simulado = results[0];

    // Obter as questões do simulado
    const queryQuestoes = 'SELECT * FROM questoes WHERE simulado_id = ?';
    connection.execute(queryQuestoes, [simuladoId], (err, questoes) => {
      if (err) {
        return res.status(500).json({ message: 'Erro ao buscar questões' });
      }

      // Retornar o simulado e suas questões
      res.json({ titulo: simulado.titulo, questoes });
    });
  });
});

module.exports = router;
