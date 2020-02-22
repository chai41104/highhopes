const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

const hostname = '127.0.0.1';
const port = 3000;

app.use('/', router);
app.use(express.static(__dirname + '/public/script'));
app.use(express.static(__dirname + '/public/view'));
app.listen(process.env.port || port, hostname);
console.log(`Server running at http://${hostname}:${port}/`);
