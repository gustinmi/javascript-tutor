var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'p',
  database : 'javascript'
});
 
connection.connect();
 
connection.query('SELECT 1 + 1', function (error, results, fields) {
  if (error){
  	console.log("Napaka je" + error);
	throw error;
  } 

  console.log('Povezan. Rezultat je : ', results);
});
