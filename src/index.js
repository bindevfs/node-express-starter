import express from 'express';
import morganLogger from 'morgan';
import cors from 'cors';
import { createServer } from 'http';
import Server from 'socket.io';

require('dotenv').config();

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

app.use(morganLogger('dev'));
app.use(cors());
app.use(express.json());

io.on('connection', (socket) => {
  console.log('Connnection');
});

const PORT = process.env.PORT || 5000;

httpServer.listen(PORT, () => {
  console.log(`Port run: ${PORT}`);
});
