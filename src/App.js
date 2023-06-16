import { Route, Routes } from "react-router-dom"
import './App.css';
import Homepage from './components/pages/home/Homepage';
import Projectpage from './components/pages/project/Projectpage';
import Resumepage from './components/pages/resume/Resumepage';
import Contactpage from './components/pages/contact/Contactpage';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/footer';

function App() {
  return (
    <>
    <Navbar/>
    
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/projects" element={<Projectpage />} />
      <Route path="/resume" element={<Resumepage />} />
      <Route path="/contact" element={<Contactpage />} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
