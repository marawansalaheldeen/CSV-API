var express = require('express');
var app = express();
var con = require('./models/dbcon');
var connection = con.connection;

app.set('view engine','ejs');

var appcontrol = require('./controller/control');
appcontrol(app);
port = 3000;
var server = app.listen(port,()=> console.log(`app listen on port ${port}!`));

