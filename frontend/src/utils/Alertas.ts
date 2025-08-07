import Swal from "sweetalert2";

// Alerta Iformacion
export const showAlert = (title: string, text?: string) => {
  Swal.fire({
    title,
    text,
    icon: "info",
    confirmButtonText: "Aceptar",
  });
};

// Alerta de éxito
export const showSuccess = (message: string) => {
  Swal.fire({
    title: "Éxito",
    text: message,
    icon: "success",
    confirmButtonText: "Genial",
  });
};

// Alerta de error
export const showError = (message: string) => {
  Swal.fire({
    title: "Error",
    text: message,
    icon: "error",
    confirmButtonText: "Entendido",
  });
};

// Confirmación con callback
export const showConfirm = (
  title: string,
  text: string,
  onConfirm: () => void
) => {
  Swal.fire({
    title,
    text,
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sí",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      onConfirm();
    }
  });
};
