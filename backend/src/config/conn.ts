import dotenv from "dotenv";
dotenv.config();
import mysql from "mysql2/promise";

const conn = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

async function Conexion() {
  try {
    const conexion = await conn.getConnection();
    console.log("Conexion establecida");
    conexion.release();
  } catch (err) {
    console.error("Error de conexion");
    process.exit(1);
  }
}

Conexion();

export default conn;
