import HeaderAdmin from "../../layouts/admin/header.admin";
import Contador from "../../layouts/porte/Contador";
import ControlVisitas from "../../layouts/porte/ControlVisitas";

function Porteria() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderAdmin Titulo={`Porteria`} />
      <div className=" min-h-40 flex justify-center bg-gray-300 py-10">
        <div className="flex gap-6 w-[90%] max-w-8xl">
          <Contador />
          <ControlVisitas />
        </div>
      </div>
    </div>
  );
}

export default Porteria;
