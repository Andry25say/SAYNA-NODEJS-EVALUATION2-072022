
const mysql = require('mysql2');

console.log(process.env);
const db = mysql.createConnection({
    host:process.env.MYSQLHOST,
    user:process.env.MYSQLUSER,
    password:process.env.MYSQLPASS,
    port:process.env.MYSQLPORT,
    database:process.env.MYSQLDATABASE
})

module.exports = db;