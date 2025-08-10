import conn from "../config/conn";
import { torre, apartamento } from "../@types/people";

async function Apartamento(letra: string): Promise<apartamento | null> {
  const sql = `
  SELECT a.Ap_numero
  FROM torre t
  INNER JOIN apartamento a ON t.To_id = a.To_id
  WHERE t.To_letra = ?
`;

  const [rows]: any = await conn.query(sql, [letra]);

  return rows;
}

async function Torre(): Promise<torre> {
  const [rows]: any = await conn.query("SELECT To_letra FROM torre");
  return rows;
}

export default { Apartamento, Torre };
