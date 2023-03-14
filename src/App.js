import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/sections/NavBar";
import { Banner } from "./components/sections/Banner";
import { Skills } from "./components/sections/Skills";
import { Projects } from "./components/sections/Projects";
import { Work } from "./components/sections/Work";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/sections/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
