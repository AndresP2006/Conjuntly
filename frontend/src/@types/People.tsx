export interface UsuarioData {
  Us_id?: number;
  Us_usuario: string;
  Us_contrasena: string;
  Us_correo?: string;
  Ro_id: number;
  estado?: string;
}

export interface Apartamento {
  Ap_numero: number;
  To_letra: string;
}

export interface Rol {
  Ro_id: number;
  Ro_tipo: string;
}

export interface PersonaData {
  Pe_id: number;
  Pe_nombre: string;
  Pe_apellidos: string;
  Pe_telefono: number;
  Us_id: number;
  Pe_Perfil?: string;
  Ap_id: number;
  usuario?: UsuarioData;
  rol?: Rol;
  edificio?: Apartamento;
}

export interface PersonaUsuarioAPI {
  Pe_id: number;
  Pe_nombre: string;
  Pe_apellidos: string;
  Pe_telefono: string;
  Us_id: number;
  Pe_Perfil: string;
  Ap_id: number;
  Us_usuario: string;
  Us_contrasena: string;
  Us_correo: string;
  Ro_id: number;
  estado: string;
  To_id: number;
  Ap_numero: number;
  To_letra: string;
  Ro_tipo: string;
}
