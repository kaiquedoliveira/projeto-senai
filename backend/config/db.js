const mysql = require('mysql2');

// Criar a conexão com o banco de dados
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'kaique', // seu nome de usuário
  password: 'Filhos@10112219', // sua senha
  database: 'projeto_senai' // o nome do banco de dados que você criou
});

// Conectar ao banco de dados
connection.connect((err) => {
  if (err) {
    console.error('Erro de conexão: ' + err.stack);
    return;
  }
  console.log('Conectado ao banco de dados com id ' + connection.threadId);
});

module.exports = connection;
