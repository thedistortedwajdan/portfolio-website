import Home from "./screens/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./screens/Projects";
import Contact from "./screens/Contact";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/portfolio-website" element={<Home />} />
          <Route path="/portfolio-website/projects" element={<Projects />} />
          <Route path="/portfolio-website/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
