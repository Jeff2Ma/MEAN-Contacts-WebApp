var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contactlist', ['contactlist']);
var bodyParser = require('body-parser');


app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/contactlist', function (req, res) {
    console.log("I received a GET request");

    db.contactlist.find(function (err, docs) {
        console.log(docs);
        res.json(docs);
    });

    // person1 = {
    //     name: 'Tim',
    //     email: '111@mamsd.com',
    //     number: '(111) 111-11111'
    // };
    //
    // person2 = {
    //     name: 'jeff',
    //     email: '22@dfasdf.com',
    //     number: '(222)223-22222'
    // };
    //
    // person3 = {
    //     name: 'john',
    //     email: '333@33.com',
    //     number: '(333) 33333333'
    // };
    //
    // var contactlist = [person1, person2, person3];
    // res.json(contactlist);
});


app.post('/contactlist', function (req, res) {
    console.log(req.body);
    db.contactlist.insert(req.body, function (err, doc) {
        res.json(doc);
    });
});


app.listen(3000);
console.log("running!");