import personaModels from "../models/persona.models";
import { Request, Response } from "express";
import userModels from "../models/user.models";
import bcrypt from "bcrypt";

//Crear usuario y personas
async function CrearPersona(req: Request, res: Response) {
  const { usuario, ...personaData } = req.body;

  // Validación de usuario
  if (
    !usuario?.Us_id ||
    !usuario?.Us_usuario ||
    !usuario?.Us_contrasena ||
    !usuario?.Us_correo ||
    !usuario?.Ro_id ||
    usuario?.estado === undefined
  ) {
    return res.status(400).json({
      code: "USER_CREDENTIALS_MISSING",
      message: "Faltan credenciales de usuario",
    });
  }

  // Validación de persona
  if (
    !personaData?.Pe_nombre ||
    !personaData?.Pe_apellidos ||
    !personaData?.Pe_telefono ||
    !personaData?.Ap_id ||
    !personaData?.Pe_Perfil
  ) {
    return res.status(400).json({
      code: "PERSON_CREDENTIALS_MISSING",
      message: "Faltan credenciales de persona",
    });
  }

  try {
    // Verificar si el nombre de usuario ya existe
    const validarUser = await userModels.userByCredenciales(usuario.Us_usuario);
    if (validarUser) {
      return res.status(409).json({
        code: "USER_ALREADY_EXISTS",
        message: `Nombre de usuario existe: ${usuario.Us_usuario}`,
      });
    }

    // Hashear contraseña
    const sifrarContraseña = await bcrypt.hash(usuario.Us_contrasena, 10);

    // Crear usuario
    const nuevoUsuario = {
      ...usuario,
      Us_contrasena: sifrarContraseña,
    };
    const createUser = await userModels.createUser(nuevoUsuario);
    if (!createUser) {
      return res.status(500).json({
        code: "USER_CREATION_FAILED",
        message: "No se pudo crear el usuario ya existente",
      });
    }

    // Crear persona
    const nuevaPersona = {
      ...personaData,
      Us_id: createUser.Us_id,
      Pe_id: createUser.Us_id,
    };
    const createPersona = await personaModels.createPerson(nuevaPersona);
    if (!createPersona) {
      return res.status(500).json({
        code: "PERSON_CREATION_FAILED",
        message: "No se pudo crear la persona",
      });
    }

    return res.status(200).json({
      code: "SUCCESS",
      message: "Residente creado correctamente",
      usuario: createUser,
      persona: createPersona,
    });
  } catch (e) {
    return res.status(500).json({
      code: "SERVER_ERROR",
      message: "Error interno del servidor",
      error: String(e),
    });
  }
}

//Mostrar residentes
async function Residentes(req: Request, res: Response) {
  try {
    const people = await personaModels.Peoples();
    return res.status(200).json({ message: people });
  } catch (e) {
    return res.status(500).json({ message: e });
  }
}

//Mostrar Roles
async function Roles(req: Request, res: Response) {
  try {
    const roles = await personaModels.Rol();
    return res.status(200).json({ message: roles });
  } catch (e) {
    return res.status(500).json({ message: e });
  }
}

async function MostrarPersonasId(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const personas = await personaModels.getDatosPersona(Number(id));
    return res.status(200).json({ personas });
  } catch (e) {
    return res.status(500).json({ message: e });
  }
}
export default { CrearPersona, Residentes, Roles, MostrarPersonasId };
