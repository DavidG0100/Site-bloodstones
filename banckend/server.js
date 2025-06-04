const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

app.use(cors());
app.use(express.json());

app.post('/api/cadastro', async (req, res) => {
  try {
    const { nome, email, telefone } = req.body;
    const [result] = await pool.execute(
      'INSERT INTO usuarios (nome, email, telefone) VALUES (?, ?, ?)',
      [nome, email, telefone]
    );
    const [user] = await pool.execute(
      'SELECT * FROM usuarios WHERE id = ?',
      [result.insertId]
    );
    res.json({
      success: true,
      message: `Bem-vindo à guilda, ${nome}!`,
      usuario: user[0]
    });
    
  } catch (error) {
    console.error('Erro:', error);
    if (error.code === 'ER_DUP_ENTRY') {
      return res.status(400).json({
        success: false,
        message: 'Este email já está cadastrado!'
      });
    }
    
    res.status(500).json({
      success: false,
      message: 'Erro ao cadastrar usuário'
    });
  }
});

app.get('/', (req, res) => {
  res.json({ message: 'API Bloodstone funcionando!' });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});