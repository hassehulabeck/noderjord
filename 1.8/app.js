// Nobel laureates
const https = require('https');
const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

var data = "";
https.get('https://yhjust16.herokuapp.com/nobel', (res) => {
    app.listen(3000, () => {
        console.log('Alive at 3000');
    });
    res.on('data', (d) => {
        data += (d);
    });
    res.on('end', () => {
        let parsed = JSON.parse(data);
        app.get('/', (req, res) => {
            res.render('index', {
                title: 'Yahoooo',
                list: parsed
            })
        });
    });
})