// get the client

import mysql from 'mysql2';
// create the connection to database
const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'nodejsbasic',
  password: '',
});

// simple query
// connection.query(
//   "SELECT * FROM customers",
//   function(err, results, fields) {
//     if(!err){
      
//       console.log([results]); // results contains rows returned by server
//       //console.log(fields); // fields contains extra meta data about results, if available
//     }else{
//       console.log('co loi',err)
//     }
   
//   }
// );


export default connection;

