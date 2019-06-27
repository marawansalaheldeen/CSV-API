var mysql =  require('mysql');


const connection = mysql.createConnection({
		host:'localhost',
		user:'root',
		password:'test',
		database:'csvfile',
		port:'3306'
});

module.exports = {connection:connection}
