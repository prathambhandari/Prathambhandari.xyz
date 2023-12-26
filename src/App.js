import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Socials from "./components/Social";
import Courses from "./components/Courses";

function App() {
  return (
    <div className="App scroll-smooth ">
      <Header />
      <Home />
      <About/>
      <Courses />

    </div>
  );
}

export default App;
