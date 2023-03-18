const mysql = require('mysql2');

const dataBaseConnection = mysql.createPool({
    host : "localhost",
    user : "root",
    password : "Kingkd022@2212",
    database : "event_management"
})
 module.exports = dataBaseConnection;