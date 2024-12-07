import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CoursePage from "./pages/CoursePage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course/" element={<CoursePage />} />
          <Route path="/course/:id" element={<CoursePage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
