import express from 'express';
import morganLogger from 'morgan';
import cors from 'cors';

require('dotenv').config();

const app = express();

app.use(morganLogger('dev'));
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Port run: ${PORT}`);
});
