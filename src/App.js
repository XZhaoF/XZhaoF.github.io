import Navbar from "./components/NavBar/navbar";
import Animation from "./components/Animation/Animation";
import Intro from "./components/Intro/intro";
import About from "./components/About/about";


function App() {

  return (
    <div className="App">
      <Animation/>
      <Navbar/>
      <Intro/>
      <About/>
    </div>
  );
}

export default App;
