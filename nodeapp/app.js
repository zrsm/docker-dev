const express = require('express');
const app = express();
const port = 3003;
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('./core/database');
const session = require('express-session');
const router = express.Router();

const server = app.listen(port, () => console.log('Server listening on port ' + port));

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'assets')));

app.use(session({
    secret: 'I need bread.',
    resave: true,
    saveUninitialized: false
}))

console.log("Hello mother fucker!!!!")

