import { Home } from "./routes/Home.tsx";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Shared/Header.tsx";
import { PageNotFound } from "./components/Shared/PageNotFound.tsx";
import { DashBoard } from "./routes/DashBorad.tsx";
import { HomeMainLayer } from "./components/Home/HomeMainLayer.tsx";
import Footer from "./components/Shared/Footer.tsx";
import About from "./routes/About.tsx";
import Services from "./routes/Services.tsx";
import Contact from "./routes/Contact.tsx";

const App = () => {
  return (
    <>
      <main className="min-h-screen relative">
        <HomeMainLayer />
        <Header />
        <div className="mt-[70px] h-full">
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/dashboard"} element={<DashBoard />} />
            <Route path={"/about"} element={<About />} />
            <Route path={"/services"} element={<Services />} />
            <Route path={"/contact"} element={<Contact />} />
            <Route path={"*"} element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default App;
