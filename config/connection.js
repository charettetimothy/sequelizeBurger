// var mysql = require("mysql");

// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "root",
//   database: "burgers_db"
// });

// if (process.env.JAWSDB_URL) {
//   connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
//   connection = mysql.createConnection({
//     host: 'xefi550t7t6tjn36.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
//     user: 's13tx38py4xdo74b',
//     password: 'a4kkbc5u1los0n2o',
//     database: 'et65oaez53kju24b'
//   })
// }

// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

// module.exports = connection;