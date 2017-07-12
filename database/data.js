const pg = require('pg');

const pool = new pg.Pool({
    host: 'localhost',
    port: 5432,
    database: 'ChatApp',
    password: 'NguyenThanhPhuong',
    user: 'postgres',
    max: 10,
    idleTimeoutMillis: 1000
});

pool.connect((err) => {
    if (err) return console.log(err.toString());
    console.log('Da ket noi');
});
