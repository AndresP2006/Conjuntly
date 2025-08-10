export const Api = {
  USER: {
    API_URL_USER: import.meta.env.VITE_API_URL_USER + "/cda/login",
    method: "POST",
  },
  Residente: {
    API_URL_RESIDENTE: import.meta.env.VITE_API_URL_USER + "/cda/People",
    method: "GET",
  },
  Roles: {
    API_URL_ROLES: import.meta.env.VITE_API_URL_USER + "/cda/Roles",
    method: "GET",
  },
};
