export interface UsuarioData {
  Us_id?: number;
  Us_usuario: string;
  Us_contrasena: string;
  Us_correo?: string;
  Ro_id: number;
  estado?: string;
}

export interface PersonaData {
  Pe_id: number;
  Pe_nombre: string;
  Pe_apellidos: string;
  Pe_telefono: number;
  Us_id: number;
  Pe_Perfil?: string | null;
  Ap_id: number;
  usuario: UsuarioData;
}

export interface Rol {
  Ro_id: number;
  Ro_tipo: string;
}

export interface Dato {
  Pe_id: number;
  Pe_nombre: string;
  Pe_apellidos: string;
  Us_correo: string;
  estado: string | "inactivo";
  Ap_numero: number;
  Us_usuario: string;
  Pe_telefono: string;
  Ro_tipo: string;
}
