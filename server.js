const express = require('express');
const app = express();

const HOST = '0.0.0.0';
const PORT = 8090;

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/js'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/css', express.static(__dirname + '/public/css'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index/index');
});

app.listen(PORT, HOST, ()=> {
    console.log('does this work?');
});
