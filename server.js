require('./models/db');

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const bookController = require('./controllers/bookController');

var app = express();

app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/' }));
app.set('view engine', 'hbs');

app.listen(3000, () => {
    console.log('Az Express szerver a következő porton fut: 3000');
});

app.use('/book', bookController);