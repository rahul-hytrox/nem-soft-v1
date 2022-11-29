const mysql = require('mysql');

// create here mysql connection
const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sample_test'
});

dbConn.connect(function(error){
    /*if(error) throw error;
    console.log('Database Connected Successfully!!!');*/
      if (error) {
        console.log("Database Status_________"+dbConn.state+"_________{{ErrorInfo}}____________"+error);
        
      } else {
        console.log("Database Status_________", dbConn.state);
      }
})

module.exports = dbConn;