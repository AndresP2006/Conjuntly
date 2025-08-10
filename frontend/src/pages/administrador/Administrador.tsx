import HeaderAdmin from "../../layouts/admin/header.admin";
import MainContent from "../../layouts/admin/main.admin";
import NavbarAdmin from "../../layouts/admin/navbar.admin";

function Admin() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderAdmin Titulo="Administrativo" />
      <div className="flex flex-1">
        <NavbarAdmin />
        <main className="flex-1 p-4 bg-white">
          <br />
          <MainContent />
        </main>
      </div>
    </div>
  );
}

export default Admin;
