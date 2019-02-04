var express = require('express');
var catalogcontroller = require('./controllers/catalogcontroller');

var app = express();

app.set('view engine', 'ejs');

app.use(express.static('./public'));

catalogcontroller(app);

app.listen(3002);
console.log('Now listening to port 3002');
