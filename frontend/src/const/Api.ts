export const Api = {
  USER: {
    API_URL_USER: import.meta.env.VITE_API_URL_USER + "/login",
    method: "POST",
  },
  Residente: {
    API_URL_RESIDENTE: import.meta.env.VITE_API_URL_USER + "/People",
    method: "GET",
  },
  Roles: {
    API_URL_ROLES: import.meta.env.VITE_API_URL_USER + "/Roles",
    method: "GET",
  },
  CrearResidente: {
    Api_ULR_CREATE_PEOPLE: import.meta.env.VITE_API_URL_USER + "/usuario",
    method: "POST",
  },
  Torres: {
    API_ULR_TORRE: import.meta.env.VITE_API_URL_USER + "/Torre",
    method: "GET",
  },
  Apartamento: {
    getAPIUrlApartamento: (letra: string) =>
      `${
        import.meta.env.VITE_API_URL_USER
      }/torre/${letra.toLowerCase()}/apartamentos`,
    method: "GET",
  },
};
