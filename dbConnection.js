var mysql = require('mysql');
var conn = mysql.createConnection({
  host: 'xxxx', // Replace with your host name
  user: 'xxxx',      // Replace with your database username
  password: 'xxxx',      // Replace with your database password
  database: 'xxxxx' // // Replace with your database Name
}); 
 
conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});
module.exports = conn;