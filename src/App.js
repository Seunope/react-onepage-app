import './App.css';
import Navbar from './components/Nav/Navbar';
import Home from './components/pages/Home';
import Footer from './components/pages/Footer/Footer';
import GetInTouch from './components/pages/GetInTouch';
import AboutUS from './components/pages/AboutUs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about-us" element={<AboutUS />} />
        <Route path="/get-in-touch" element={<GetInTouch />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
