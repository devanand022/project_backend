const mysql = require('mysql2');

const dataBaseConnection = mysql.createPool({
    host : "localhost",
    user : "root",
    password : "Kingkd022@2212",
    database : "test"
})
 module.exports = dataBaseConnection;