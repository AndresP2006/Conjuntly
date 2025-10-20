import ManiUser from "../../layouts/user/Perfil";
import RegistrosUsuario from "../../layouts/user/RegistrosUsuario";

function RegistrosVisita() {
  return (
    <div className="min-h-screen flex justify-center bg-gray-300 py-10">
      <div className="flex gap-6 w-[90%] max-w-6xl">
        <ManiUser />
        <RegistrosUsuario/>
      </div>
    </div>
  );
}

export default RegistrosVisita;
