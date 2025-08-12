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
      .json({ message: "Error interno del servidor" + String(err) });
  }
}

//Cambiar el estado de un Usuario
async function Desactivar(req: Request, res: Response) {
  const { id } = req.params;

  try {
    const verificar = await userModels.verificarEstado(Number(id));

    if (!verificar) {
      return res
        .status(404)
        .json({ message: `Usuario con ID ${id} no encontrado` });
    }
    // console.log(verificar);
    const nuevoEstado = verificar.estado === "activo" ? "inactivo" : "activo";
    await userModels.Desactivar(nuevoEstado, Number(id));

    return res.status(200).json({
      data: nuevoEstado,
    });
  } catch (error) {
    console.error("Error al cambiar estado del usuario:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
}

export default { Login, Desactivar };
