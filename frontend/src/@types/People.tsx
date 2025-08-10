export interface Persona {
  peId: number;
  nombre: string;
  apellidos: string;
  telefono: number;
  usuarioId: number;
  apartamentoId: number;
}

export interface Usuario {
  Us_id: number;
  Us_usuario: string;
  Us_contrasena: string;
  Us_correo: string;
  Ro_id: number;
  estado: string;
}
