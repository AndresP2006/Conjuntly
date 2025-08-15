//Funciones (get,put,delete) de residente,visitas y paquetes
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

//GET TORRES
export async function Torres() {
  const response = await fetch(Api.Torres.API_ULR_TORRE, {
    method: Api.Torres.method,
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();
  return data;
}

//GET APARTAMENTOS
async function Apartamento(torre: string) {
  const url = Api.Apartamento.getAPIUrlApartamento(torre);
  const response = await fetch(url, {
    method: Api.Apartamento.method,
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();
  return data;
}

//PUT EDITAR ESTADO
async function Estado(id: string) {
  const url = Api.Estado.putApiUrlEstas(id);
  const response = await fetch(url, {
    method: Api.Estado.method,
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();
  return data;
}

//GET MOSTRAR RESIDENTE POR ID
async function ResidenteId(id: string) {
  const url = Api.ResidenteId.getResidenteId(id);

  const response = await fetch(url, {
    method: Api.ResidenteId.method,
    headers: { "Content-Type": "application/json" },
  });

  const data = await response.json();
  return data;
}

//GET MOSTRAR RESIDENTE POR USUARIO
async function ResidenteUsuario(user: string) {
  const url = Api.ResidenteUser.getResidenteUser(user);

  const response = await fetch(url, {
    method: Api.ResidenteUser.method,
    headers: { "Content-Type": "application/json" },
  });

  const data = await response.json();
  return data;
}

export default {
  Residentes,
  Roles,
  Torres,
  Apartamento,
  Estado,
  ResidenteId,
  ResidenteUsuario,
};
