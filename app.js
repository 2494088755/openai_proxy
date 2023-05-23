const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

const OPENAI_API_KEY = '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'; // 替换为你的OpenAI API密钥

app.use(express.json());

app.post('/gpt3', async (req, res) => {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/engines/davinci-codex/completions',
      req.body,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(error.response.status).json(error.response.data);
  }
});

app.listen(port, () => {
  console.log(`OpenAI proxy server listening at http://localhost:${port}`);
});