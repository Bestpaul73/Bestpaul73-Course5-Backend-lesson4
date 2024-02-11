const express = require('express');
const userRouter = require('./routes/users');
const bookRouter = require('./routes/books');

const loggerOne = require('./middlewares/loggerOne');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const donenv = require('dotenv');
donenv.config();

const { PORT = 3000, API_URL = 'http://127.0.0.2', MONGO_URL = 'mongodb://127.0.0.1:27017/backend' } = process.env;

mongoose
  .connect(MONGO_URL)
  .then(() => console.log('Connected to mongoDB'))
  .catch((err) => console.log(err));

const app = express();

const helloWorld = (request, response) => {
  response.status(200);
  response.send('Hello, world!');
};

app.use(cors());
app.use(loggerOne);
app.use(bodyParser.json());

app.get('/', helloWorld);

app.post('/', (request, response) => {
  response.status(200);
  response.send('Hello from post!');
});

app.use(userRouter);
app.use(bookRouter);

app.listen(PORT, () => {
  console.log(`Сервер запущен по адресу ${API_URL}:${PORT}`);
});
