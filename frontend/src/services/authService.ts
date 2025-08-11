//Funciones para login, registro, logout, verificación de toke
import { Api } from "../const/Api";
import type { PersonaData } from "../@types/People";

//POST INISIO DE SESION (LOGIN)
async function Login(usuario: string, contraseña: string) {
  const response = await fetch(Api.USER.API_URL_USER, {
    method: Api.USER.method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ usuario, contraseña }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Error al inisiar sesion");
  }
  localStorage.setItem("usuario", data.usuario.Us_usuario);

  return data;
}

//POST CREAR RESIDENTE Y USUARIO
async function CraerPersona(datos: PersonaData) {
  try {
    const response = await fetch(Api.CrearResidente.Api_ULR_CREATE_PEOPLE, {
      method: Api.CrearResidente.method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datos),
    });

    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
  }
}

export default { Login, CraerPersona };
