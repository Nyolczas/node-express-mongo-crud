const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/BooksDB', {
    useNewUrlParser: true
}, (err) => {
    if (!err) {
        console.log('Sikeres MongoDB kapcsolódás.')
    } else{
        console.log('Hiba a DB kapcsolatban: ' + err)
    }
});

require('./book.model');