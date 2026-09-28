import { Pool } from "pg";

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "pedrinho",
    password: "admin",
    port: 5432
});

export default pool;