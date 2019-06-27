var express = require('express');
var app = express();
var con = require('./models/dbcon');
var connection = con.connection;

var fs = require('fs');
var csv = require('csv-parser');
var csvs = require('csv-stream');


var apconrol = require('./controller/control');
app.set('view engine','ejs');


let csvStream = csvs.createStream()
var file = fs.createReadStream('mycsv.csv').pipe(csvStream);

var error = file.on('error',function(err){
	console.log(err);
});

var head = file.on('head',function(columns){
		for(var i=0;i<columns.length;i++){
			arr.push(columns[i]);
			
		}
})


var data = file.on('data',function(data){
	
})


apcontrol(app);
port = 3000;
var server = app.listen(port,()=> console.log(`app listen on port ${port}!`));

