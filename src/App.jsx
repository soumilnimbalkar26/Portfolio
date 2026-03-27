import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Screen1 from "./screens/Screen1";
import About from "./screens/About";
import Contact from "./screens/Contact";
import { Route, Routes } from "react-router-dom";
import Work from "./screens/Work";
import { useSelector } from "react-redux";
import Tools from "./screens/Tools";
import Skills from "./screens/Skills";
import MainScreen from "./screens/MainScreen";

function App() {
  const { darkMode } = useSelector((state) => state.darkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen pt-[80px]`}>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainScreen />} />
        {/* <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} /> */}
        {/* <Route path="/tools" element={<Tools />} /> */}
      </Routes>
    </div>
  );
}

export default App;

