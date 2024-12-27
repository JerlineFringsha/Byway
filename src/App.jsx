import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CoursePage from "./pages/CoursePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Wrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/course/" element={<CoursePage />} />
            <Route path="/course/:id" element={<CoursePage />} />
          </Routes>
        </Wrapper>
        <Footer />
      </Router>
    </>
  );
}

export default App;
