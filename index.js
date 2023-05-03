const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // port 3000 digunakan untuk menjalankan server lokal

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.get('/html', (req, res) => {
  const html = '<html><head><title>HTML</title></head><body><h1>Html</h1></body></html>';
  res.send(html);
});

app.get('/json', (req, res) => {
  const data = {
    name: 'Wayfarer',
    age: 22,
    email: 'registlet@example.com'
  };
  res.json(data);
});