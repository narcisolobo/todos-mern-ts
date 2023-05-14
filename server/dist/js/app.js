import express from 'express';
import cors from 'cors';
import todoRouter from './routes/todos/index.js';
import dbConnect from './db/db-connect.js';
const app = express();
app.use(express.json(), cors());
app.use('/api/todos', todoRouter);
const PORT = process.env.PORT || 8000;
async function startServer() {
    try {
        await dbConnect();
        app.listen(PORT, () => console.log(`Listening on port ${PORT}.`));
    }
    catch (err) {
        console.log(err);
        throw err;
    }
}
startServer();
