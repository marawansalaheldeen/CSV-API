var fs = require('fs');
var csv = require('csv-parser');
var csvs = require('csv-stream');

var model = require('../models/dbcon');


var connection = model.connection;


module.exports = function(app){
	
let csvStream = csvs.createStream()

app.get('/',(req,res)=>{
	var file = fs.createReadStream('mycsv.csv').pipe(csvStream);
	var head = file.on('header',function(columns){
	
	connection.query('CREATE TABLE datafile )',function(err,result){
			console.log(err);
			console.log(result);
		});
	res.render('index',{items:columns});
	})
})
app.get('/data',(req,res)=>{
	var file = fs.createReadStream('mycsv.csv').pipe(csvStream);
	var data = file.on('data',function(data){
		console.log(data)
		//res.render('index',{items:data});
	});
})












}
