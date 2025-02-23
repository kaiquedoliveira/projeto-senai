const mysql = require('mysql2/promise');  // Usando o promise API do mysql2

// Criar a pool de conexões com o banco de dados
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',  // Substitua com seu nome de usuário
  password: 'Kaique@08',  // Substitua com sua senha
  database: 'projeto_senai',  // Substitua com o nome do seu banco de dados
  waitForConnections: true,  // Aguarda as conexões disponíveis
  connectionLimit: 10,       // Limita o número de conexões simultâneas
  queueLimit: 0              // Sem limite na fila de requisições
});

// Função para testar a conexão
async function testConnection() {
  try {
    const connection = await pool.getConnection();
    console.log('Conectado ao banco de dados com id ' + connection.threadId);
    connection.release();  // Libera a conexão de volta para o pool
  } catch (err) {
    console.error('Erro de conexão ao banco de dados: ' + err.stack);
  }
}

// Chama a função de teste de conexão
testConnection();

// Exportar o pool de conexões para ser usado nas rotas
module.exports = pool;
