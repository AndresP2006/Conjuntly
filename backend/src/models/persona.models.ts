import conn from "../config/conn";
import { persona } from "../@types/people";

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
      INSERT INTO persona (Pe_id, Pe_nombre, Pe_apellidos, Pe_telefono, Us_id, Ap_id)
      VALUES (?, ?, ?, ?, ?, ?)
    `;
    await conn.query(query, [
      data.Us_id, // Usamos Us_id como Pe_id
      data.Pe_nombre,
      data.Pe_apellidos,
      data.Pe_telefono,
      data.Us_id,
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

export default { createPerson };
