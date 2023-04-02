const express = require('express');
const app = express();

const port = 3000;

// ROTA
app.get('/home', (req, res) => { // CALLBACK VIA GET
  res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost: ${port}`)
});