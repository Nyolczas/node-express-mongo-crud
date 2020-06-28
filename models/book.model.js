const mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({
    title: {
        type: String
    },
    author: {
        type: String
    },
    price: {
        type: Number
    }
});

mongoose.model('Book', bookSchema);