import bodyParser from 'body-parser'
import express from 'express';
import cors from 'cors';
//import config from './config/config';

const app = express();

//set middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// create express server 
const server = app.listen(4000, '0.0.0.0', () => {
    require('figlet')('Node . Js \n\nService\n\n', {
        font: 'Slant'
    });
})