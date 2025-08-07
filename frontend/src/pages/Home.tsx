import HeaderHome from "../layouts/header.home";
import ContentHome from "../layouts/content.home";
import FooterHome from "../layouts/footer.home";

function Home() {
  return (
    <div>
      <div className="min-h-screen flex flex-col">
        <HeaderHome />
        <main className="flex-grow">
          <ContentHome />
        </main>
        <FooterHome />
      </div>
    </div>
  );
}

export default Home;
