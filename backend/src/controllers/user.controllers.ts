import { Request, Response } from "express";
import userModels from "../models/user.models";
import bcrypt from "bcrypt"; // Sifrar contraseñas

//Iniciar Sesion
async function Login(req: Request, res: Response) {
  const { usuario, contraseña } = req.body;

  if (!usuario || !contraseña) {
    return res.status(400).json({ message: "Faltan credenciales" });
  }

  try {
    const user = await userModels.userByCredenciales(usuario);

    if (!user) {
      return res
        .status(401)
        .json({ message: "Usuario no encontrado o inactivo" });
    }

    const match = await bcrypt.compare(contraseña, user.Us_contrasena);
    if (!match) {
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }

    return res
      .status(200)
      .json({ message: "Inicio de sesión exitosa", usuario: user });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Error interno del servidor", error: String(err) });
  }
}

//Crear usuario
async function crearUsur(req: Request, res: Response) {
  const data = req.body;

  if (
    !data.Us_id ||
    !data.Us_usuario ||
    !data.Us_contrasena ||
    !data.Us_correo ||
    !data.Ro_id ||
    !data.estado
  ) {
    return res.status(400).json({ message: "Faltan credenciales" });
  }

  try {
    const validar = await userModels.getUserById(parseInt(data.Us_id));
    if (validar) {
      return res
        .status(401)
        .json({ message: "No puedes crear un usuario ya existente" });
    }
    const validarUser = await userModels.userByCredenciales(data.Us_usuario);
    if (validarUser) {
      return res
        .status(401)
        .json({ message: "Usuario ya existente: " + data.Us_usuario });
    }

    const sifrarContraseña = await bcrypt.hash(data.Us_contrasena, 10);

    const usuario = {
      ...data,
      Us_contrasena: sifrarContraseña,
    };

    const createUser = await userModels.getUser(usuario);

    return res
      .status(200)
      .json({ data: createUser, message: "Usuario creado" });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Error interno del servidor", error: String(err) });
  }
}

export default { Login, crearUsur };
