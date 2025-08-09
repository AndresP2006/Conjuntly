import HeaderAdmin from "../../layouts/admin/header.admin";
import FooterHome from "../../layouts/footer.home";

function Admin() {
  return (
    <div>
      <div className="min-h-screen flex flex-col">
        <HeaderAdmin Titulo="Control de Visitas" />
        <FooterHome />
      </div>
    </div>
  );
}

export default Admin;
