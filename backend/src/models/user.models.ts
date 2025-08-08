import conn from "../config/conn";
import { user } from "../@types/people";

//Iniciar Sesion
async function userByCredenciales(usuario: string): Promise<user | null> {
  const query = "SELECT * FROM usuario WHERE Us_usuario=?  AND estado= 1";
  const values = [usuario];

  const [rows]: any = await conn.query(query, values);
  const result = rows as user[];
  return result[0] || null;
}

//Buscar Usuario por id
async function getUserById(id: number): Promise<user | null> {
  try {
    const query = "SELECT * FROM usuario WHERE Us_id=?";
    const [result]: any = await conn.query(query, [id]);
    return result.rows[0] || null;
  } catch (err) {
    console.error(err);
    return null;
  }
}

//Crear usuario
async function getUser(data: user): Promise<user | null> {
  try {
    const query =
      "INSERT INTO usuario(`Us_id`,`Us_usuario`,`Us_contrasena`,`Us_correo`,`Ro_id`,estado) VALUES(?,?,?,?,?,?)";

    await conn.query(query, [
      data.Us_id,
      data.Us_usuario,
      data.Us_contrasena,
      data.Us_correo,
      data.Ro_id,
      data.estado,
    ]);

    return null;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export default { userByCredenciales, getUserById, getUser };
