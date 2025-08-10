//Funciones (get,post,put,delete) de residente,visitas y paquetes
import { Api } from "../const/Api";

//Mostrar datos para el panel administrativo
//GET RESIDENTES
async function Residentes() {
  const response = await fetch(Api.Residente.API_URL_RESIDENTE, {
    method: Api.Residente.method,
    headers: { "Content-Type": "application/json" },
  });
  const { message } = await response.json();

  return message;
}

//GET ROLES
async function Roles() {
  const response = await fetch(Api.Roles.API_URL_ROLES, {
    method: Api.Roles.method,
    headers: { "Content-Type": "application/json" },
  });
  const { message } = await response.json();
  return message;
}

export default { Residentes, Roles };
