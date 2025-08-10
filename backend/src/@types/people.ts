import { RowDataPacket } from "mysql2";

export interface user extends RowDataPacket {
  Us_id: number; // opcional porque se genera en DB
  Us_usuario: string;
  Us_contrasena: string;
  Us_correo: string;
  Ro_id: number;
  estado: "activo" | "inactivo";
}

export interface persona extends RowDataPacket {
  Pe_id: number; // opcional si lo genera la DB
  Pe_nombre: string;
  Pe_apellidos: string;
  Pe_telefono: number;
  Us_id: number; // obligatorio porque se vincula al usuario
  Ap_id: number;
}

export interface visita extends RowDataPacket {
  Vi_id: number;
  Vi_nombres: string;
  Vi_apellidos: string;
  Vi_telefono: number;
  estado: string;
  Vi_permiso: string;
}

export interface paquete extends RowDataPacket {
  Pa_id: number;
  Pa_estado: string;
  Pa_descripcion: string;
  Pa_fecha: string;
  Pa_responsable: string;
  Pe_id: number;
  Pa_recibe: number;
  Pa_fecha_recibe: Date;
}

export interface registros extends RowDataPacket {
  Re_id: number;
  Re_fecha_entrada: Date;
  Re_hora_entrada: Date;
  Re_hora_salida: Date;
  Re_motivo: string;
  Use_visit: string;
  Vi_departamento: number;
  Pe_id: number;
  Vi_id: number;
}

export interface torre extends RowDataPacket {
  To_id: number;
  To_letra: string;
}

export interface apartamento extends RowDataPacket {
  Ap_id: number;
  To_id: number;
  Ap_numero: number;
}

export interface Rol extends RowDataPacket {
  Ro_id: number;
  Ro_tipo: string;
}
