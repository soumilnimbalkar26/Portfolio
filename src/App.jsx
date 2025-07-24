import Navbar from "./components/Navbar";
import Screen1 from "./screens/Screen1";
import About from "./screens/About";
import Contact from "./screens/Contact";
import { Route, Routes } from "react-router-dom";
import Work from "./screens/Work";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Screen1 />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
