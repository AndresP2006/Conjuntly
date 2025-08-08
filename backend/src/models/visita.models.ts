import conn from "../config/conn";
import { visita } from "../@types/people";

//Contador de visitas
async function CountVisit(): Promise<number> {
  const [rows]: any = await conn.query(
    `SELECT COUNT(*) AS total
     FROM visitantes AS v
     INNER JOIN registro AS r ON v.Vi_id = r.Vi_id
     WHERE r.Re_hora_entrada > "00:00:00"
       AND v.estado = "permitido"`
  );

  return rows[0].total;
}

export default { CountVisit };
