var mysql = require('mysql');

// Your database connection is already made for you, though you may need to modify the credentials
var connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'hrlax44students'
});

connection.connect(err => {
  if (err) {
    console.log('Connection unsuccessful')
  } else {
    console.log('Connection successful!')
  }
});

module.exports = connection;