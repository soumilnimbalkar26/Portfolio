import Navbar from "./components/Navbar";
import Screen1 from "./screens/Screen1";
import About from "./screens/About";
import Contact from "./screens/Contact";
import { Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Screen1 darkMode={darkMode} setDarkMode={setDarkMode} />
      <About darkMode={darkMode} setDarkMode={setDarkMode} />
      <Contact darkMode={darkMode} setDarkMode={setDarkMode} />
    </>
  );
}

export default App;
