const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello World 2.0 (probando actualización automática) desde Express :D');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
