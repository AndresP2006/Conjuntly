import { Link } from "react-router-dom";

function NavbarAdmin() {
  return (
    <div className="bg-[#f0f0f0] text-black p-4 w-[230px] flex-shrink-0">
      <ul className="flex flex-col gap-4 font-bold ">
        <Link
          to="/Administrador"
          className="hover:text-blue-600 hover:bg-blue-100 p-2"
        >
          Administrador
        </Link>
        <Link
          to="/Visitas"
          className="hover:text-blue-600 hover:bg-blue-100 p-2"
        >
          Visitas
        </Link>
        <Link
          to="/Paquetes"
          className="hover:text-blue-600 hover:bg-blue-100 p-2"
        >
          Paquetes
        </Link>
        <Link
          to="/Apartamentos"
          className="hover:text-blue-600 hover:bg-blue-100 p-2"
        >
          Apartamentos
        </Link>
      </ul>
    </div>
  );
}

export default NavbarAdmin;
