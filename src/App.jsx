import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./client/components/NavBar";
import Home from "./client/components/Home";
import Footer from "./client/components/Footer";
import GalleryView from "./client/components/GalleryView";
import Contact from "./client/components/contact";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery/:folderName" element={<GalleryView />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
