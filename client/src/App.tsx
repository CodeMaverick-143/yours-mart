import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./landingPage/Navbar";
import Footer from "./landingPage/Footer";
import LandingPage from "./landingPage/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-pitch-black flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
