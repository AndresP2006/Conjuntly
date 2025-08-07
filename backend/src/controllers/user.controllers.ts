import { Request, Response } from "express";
import userModels from "../models/user.models";

async function Login(req: Request, res: Response) {
  const { usuario, contraseña } = req.body;

  try {
    const user = await userModels.userByCredenciales(usuario, contraseña);

    if (!user) {
      return res.status(401).json({ message: "Credenciales invalidas" });
    }

    return res
      .status(200)
      .json({ message: "Inicio de sesion exitosa", usuario: user });
  } catch (err) {
    res.status(500).json({ message: "Error interno del servidor", error: err });
  }
}

export default { Login };
