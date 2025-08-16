import Datos from "../../layouts/user/Datos";
import ManiUser from "../../layouts/user/Perfil";

function Usuario() {
  return (
    <div className="min-h-screen flex justify-center bg-gray-300 py-10">
      <div className="flex gap-6 w-[90%] max-w-6xl">
        <ManiUser />
        <Datos />
      </div>
    </div>
  );
}

export default Usuario;
