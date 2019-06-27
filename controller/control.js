var fs = require('fs');
var csv = require('csv-parser');
var csvs = require('csv-stream');

var model = require('../models/dbcon');


var connection = model.connection;


module.exports = function(app){
	
let csvStream = csvs.createStream()

var file = fs.createReadStream('mycsv.csv').pipe(csvStream);

var data = file.on('data',function(data){
	console.log(data)
})
var error = file.on('error',function(err){
	console.log(err);
})

var head = file.on('header',function(columns){
console.log(columns)
	
})
}
