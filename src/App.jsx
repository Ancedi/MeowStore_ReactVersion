// React Router imports — enables routing, navigation, and nested layouts
import {BrowserRouter, Routes, Route, Link, Outlet, NavLink, useParams} from 'react-router-dom';

// Page and component imports
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Catalogue from './pages/Catalogue';

// Global nav link styles — applies active/inactive states to navigation links
import './css/NavLinkStyles.css';

function App() {
  return(
    <BrowserRouter>
      <nav className="nav">
        <NavLink to="/" className="nav-link">Home</NavLink> |{" "}
        <NavLink to="/catalogue" className="nav-link">Catalogue</NavLink> |{" "}
        <NavLink to="/about" className="nav-link">About</NavLink> |{" "}
        <NavLink to="/contact" className="nav-link">Contact</NavLink> |{" "}
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/catalogue" element={<Catalogue/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App