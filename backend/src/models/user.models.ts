import conn from "../config/conn";
import { user } from "../@types/people";

async function userByCredenciales(
  usuario: string,
  contraseña: string
): Promise<user | "null"> {
  const query =
    "SELECT * FROM usuario WHERE Us_usuario=? AND Us_contrasena=? AND estado= 'activo'";
  const values = [usuario, contraseña];

  const [result]: any = await conn.query(query, values);

  return result[0] || null;
}

export default { userByCredenciales };
