function FooterHome() {
  return (
    <footer className="bg-slate-900 text-white py-6 px-4 text-center mt-auto">
      <p className="text-sm">
        © {new Date().getFullYear()} Control de Acceso. Todos los derechos
        reservados.
      </p>
    </footer>
  );
}

export default FooterHome;
