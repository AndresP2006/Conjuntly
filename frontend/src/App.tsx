import ContentHome from "./layouts/content.home";
import FooterHome from "./layouts/footer.home";
import HeaderHome from "./layouts/header.home";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderHome />
      <main className="flex-grow">
        <ContentHome />
      </main>
      <FooterHome />
    </div>
  );
}

export default App;
