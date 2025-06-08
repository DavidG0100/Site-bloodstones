const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const mysql = require('mysql2/promise');
require('dotenv').config();

const SALT_ROUNDS = 10;
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
    const { nome, email, telefone, senha } = req.body;

    if (!senha || senha.length < 6) {
      return res.status(400).json({
        success: false,
        message: 'A senha deve ter pelo menos 6 caracteres.'
      });
    }

    // hash da senha
    const hashedPassword = await bcrypt.hash(senha, SALT_ROUNDS);

    const [result] = await pool.execute(
      'INSERT INTO usuarios (nome, email, telefone, senha) VALUES (?, ?, ?, ?)',
      [nome, email, telefone, hashedPassword]
    );

    const [user] = await pool.execute(
      'SELECT id, nome, email, telefone, created_at FROM usuarios WHERE id = ?',
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