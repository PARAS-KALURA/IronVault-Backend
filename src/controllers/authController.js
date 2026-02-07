// SQL Production

const userCheck = await pool.query(
    "SELECT * FROM users WHERE email = $1",
[email]
);