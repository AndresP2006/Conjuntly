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

async function ApartamentoResidentes(
  apartamento: number
): Promise<torre | false> {
  const [rows]: any = await conn.query(
    `SELECT p.Pe_id, p.Pe_nombre, p.Pe_apellidos, p.Pe_telefono, a.Ap_numero
FROM
    persona p
    INNER JOIN apartamento a ON p.Ap_id = a.Ap_id
    INNER JOIN usuario u ON p.Us_id = u.Us_id
WHERE
    a.Ap_numero = ?`,
    [apartamento]
  );

  return rows.length > 0 ? rows : false;
}
export default { Apartamento, Torre, ApartamentoResidentes };
