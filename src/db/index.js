//Hey Node.js — connect my app to the PostgreSQL database
//Your Express Server  →  PostgreSQL Database


const {Pool} = require("pg");

const pool = new Pool({
    user: "postres",
    host: "localhost",
    database: "ironvault",
    password: "Paras@2003",
    port: 5432,
});

module.exports = pool;