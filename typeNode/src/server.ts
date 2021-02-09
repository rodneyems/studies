import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/oi', (req, res) => {
  res.send('Oi');
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
