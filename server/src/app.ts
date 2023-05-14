import express, { Express } from 'express';
import cors from 'cors';
import todoRouter from './routes/todos/index.js';
import dbConnect from './db/db-connect.js';

const app: Express = express();

app.use(express.json(), cors());
app.use('/api/todos', todoRouter);

const PORT = process.env.PORT || 8000;

async function startServer(): Promise<void> {
  try {
    await dbConnect();
    app.listen(PORT, () => console.log(`Listening on port ${PORT}.`));
  } catch (err) {
    console.log(err);
    throw err;
  }
}

startServer();
