import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Referensi from "./pages/Referensi";
import About from "./pages/About";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function App() {
  return (
    <SkeletonTheme baseColor="#313131" highlightColor="#525252">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/referensi" element={<Referensi />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </SkeletonTheme>
  );
}

export default App;
