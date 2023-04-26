import express from 'express';
import Connection from './database/db.js';
import dotenv from 'dotenv';
import DefaultData from './default.js';
import Routes from './routes/route.js';
import bodyParser from 'body-parser';
import cors from 'cors';

dotenv.config();
const app = express();
const PORT = process.env.PORT|| 8000;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', Routes);
Connection(username, password);
app.listen(PORT, () =>
 console.log(`Server is running successfully on PORT ${PORT}`)
 );

 DefaultData();