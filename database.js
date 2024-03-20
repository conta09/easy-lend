const { Pool } = require('pg');

// Configure your PostgreSQL connection details
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    port: 5432, // Change if your PostgreSQL server uses a different port
});
pool.connect();
pool.query('Select * from users',(err,res)=>{
    if(!err){
        console.log(res.rows);
    }else{
        console.log(err.message);
    }
    pool.end();
});
