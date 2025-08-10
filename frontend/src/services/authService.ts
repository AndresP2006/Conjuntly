//Funciones para login, registro, logout, verificación de toke
import { Api } from "../const/Api";
import type { Persona, Usuario } from "../@types/People";

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

async function CraerPersona(personas: Persona, user: Usuario) {
  const datos = {
    personas,
    user,
  };
  const response = await fetch(Api.CrearResidente.Api_ULR_CREATE_PEOPLE, {
    method: Api.CrearResidente.method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(datos),
  });

  const data = await response.json();
  return data;
}

export default { Login, CraerPersona };
