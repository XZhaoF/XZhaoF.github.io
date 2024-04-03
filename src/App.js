import Navbar from "./components/NavBar/navbar";
import Animation from "./components/Animation/Animation";
import Intro from "./components/Intro/intro";
import About from "./components/About/about";
import Projects from "./components/Projects/projects";
import Technologies from "./components/Technologies/technologies"
import Contact from "./components/Contact/contact"


function App() {

  return (
    <div className="App">
      <Animation/>
      <Navbar/>
      <Intro/>
      <About/>
      <Projects/>
      <Technologies/>
      <Contact/>
    </div>
  );
}

export default App;
