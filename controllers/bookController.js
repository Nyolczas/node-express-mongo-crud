const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Book = mongoose.model('Book');
const Handlebars = require('handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const insecureHandlebars = allowInsecurePrototypeAccess(Handlebars)

router.get('/', (req, res) => {
    res.render('book/addOrEdit', {
        viewTitle: 'Insert Book'
    });
});

router.post('/', (req, res) => {
    insertRecord(req, res);
});

const insertRecord = (req, res) => {
    const template = insecureHandlebars.compile('{{find}}')
    var book = template(new Book());
    book.author = req.body.author;
    book.title = req.body.title;
    book.price = req.body.price;
    book.save((err, doc) => {
        if (!err)
            res.redirect('book/list');
        else {
            console.log('Hiba a rekord mentésekor: ' + err);
        }
    });
}

router.get('/list', (req, res) => {
    Book.find((err, docs) => {
        if (!err) {
            res.render("book/list", {
                list: docs
            });
        } else {
            console.log('Hiba a book list visszaadásakor: ' + err);
        }
    });
});

module.exports = router;