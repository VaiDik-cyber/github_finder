import Navbar from "../src/Components/layouts/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../src/Pages/Home";
import About from "../src/Pages/About";
import Footer from "./Components/layouts/Footer";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen bg-gray-500">
        <Navbar />
        <main className="container px-3 pb-12 mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/notfound" element={<NotFound />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
