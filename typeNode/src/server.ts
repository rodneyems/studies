/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import express from 'express';
import routes from './routes/index';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(5000, () => {
  // eslint-disable-next-line no-console
  console.log('Server is running on port 5000');
});
