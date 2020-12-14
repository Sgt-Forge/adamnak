const express = require('express');
const app = express();

const HOST = '0.0.0.0';
const PORT = 8090;

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/js'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('css', express.static(__dirname + '/public/css'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
<<<<<<< HEAD
    res.send('Hello, World!');
=======
    res.render('index/index');
>>>>>>> 0706943b215811724c56a3f3e0e5fce1d527ade8
});

app.listen(PORT, HOST, ()=> {
    console.log('does this work?');
});
