import Navbar from "./components/Navbar";
import Screen1 from "./screens/Screen1";
import About from "./screens/About";
import Contact from "./screens/Contact";
import { Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Screen1 />
      <About />
      <Contact />
    </>
  );
}

export default App;
