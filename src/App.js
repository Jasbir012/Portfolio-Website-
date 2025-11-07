import Navbar from "src/components/Navbar";
import Home from "src/components/Home";
import About from "src/components/About";
import Projects from"src/components/Projects";
import Contact from "src/components/Contacts";

function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
