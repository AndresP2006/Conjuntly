import conn from "../config/conn";
import { persona, Rol } from "../@types/people";

export async function createPerson(
  data: Omit<persona, "Pe_id">
): Promise<persona | null> {
  try {
    const [rows]: any = await conn.query(
      "SELECT Ap_id FROM apartamento WHERE Ap_numero=?",
      [data.Ap_id]
    );
    if (!rows || rows.length === 0) {
      console.error("Apartamento no encontrado");
      return null;
    }
    const apId = rows[0].Ap_id;

    const query = `
      INSERT INTO persona (Pe_id, Pe_nombre, Pe_apellidos, Pe_telefono, Us_id,Pe_Perfil, Ap_id)
      VALUES (?, ?, ?, ?, ?, ?,?)
    `;
    await conn.query(query, [
      data.Us_id, // Usamos Us_id como Pe_id
      data.Pe_nombre,
      data.Pe_apellidos,
      data.Pe_telefono,
      data.Us_id,
      data.Pe_Perfil,
      apId,
    ]);

    return {
      Pe_id: data.Us_id, // Ya lo insertaste manualmente
      ...data,
    } as persona;
  } catch (err) {
    console.error("Error al crear persona:", err);
    return null;
  }
}

async function Peoples(): Promise<persona> {
  const query =
    "SELECT p.`Pe_id`, p.`Pe_nombre`, p.`Pe_apellidos`,u.`Us_correo`, u.estado, a.`Ap_numero`, u.`Us_usuario`, p.`Pe_telefono`,r.`Ro_tipo` FROM persona p JOIN usuario u ON p.Us_id = u.Us_id JOIN apartamento a ON p.Ap_id = a.Ap_id JOIN rol r ON r.`Ro_id` = u.`Ro_id`";

  const [rows]: any = await conn.query(query);

  return rows;
}

async function Rol(): Promise<Rol> {
  const query = "SELECT * FROM rol";
  const [rows]: any = await conn.query(query);
  return rows;
}

async function getDatosPersonaId(id: number): Promise<persona | null> {
  const sql = `SELECT *
FROM
    persona p
    INNER JOIN usuario u ON p.Us_id = u.Us_id
    INNER JOIN apartamento a ON p.Ap_id = a.Ap_id
    INNER JOIN torre t on a.To_id = t.To_id WHERE p.Pe_id=?`;
  const [rows]: any = await conn.query(sql, [id]);

  return rows.length > 0 ? rows[0] : null;
}

async function getDatosPersonaUser(user: string): Promise<persona | null> {
  // console.log(user);
  const sql = `
    SELECT *
    FROM persona p
    INNER JOIN usuario u ON p.Us_id = u.Us_id
    INNER JOIN apartamento a ON p.Ap_id = a.Ap_id
    INNER JOIN torre t ON a.To_id = t.To_id
    WHERE u.Us_usuario = ?
  `;

  const [rows] = await conn.query<persona[]>(sql, [user]);

  return rows.length > 0 ? rows[0] : null;
}

async function UpdatePeople(
  id: number,
  nombre: string,
  apellido: string,
  telefono: string
): Promise<true | false> {
  try {
    const sql = `UPDATE persona
SET
    Pe_nombre = ?,
    Pe_apellidos = ?,
    Pe_telefono = ?
    
WHERE
    Pe_id = ?`;

    await conn.query(sql, [nombre, apellido, telefono, id]);

    return true;
  } catch (e) {
    return false;
  }
}

export default {
  createPerson,
  Peoples,
  Rol,
  getDatosPersonaId,
  getDatosPersonaUser,
  UpdatePeople,
};
