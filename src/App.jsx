// React Router imports — enables routing, navigation, and nested layouts
import {BrowserRouter, Routes, Route, Link, Outlet, NavLink, useParams} from 'react-router-dom';

// Page and component imports
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Catalogue from './pages/Catalogue';

// Global nav link styles — applies active/inactive states to navigation links
import './css/NavLinkStyles.css';
import { useTheme } from './context/ThemeContext';

const navLinkClass = ({isActive}) =>
  isActive ? "nav-link active" : "nav-link";

function App() {
  const {theme, toggleTheme} = useTheme();
  return(
    <BrowserRouter>
      <nav className="nav">
        <div className={theme}>
          <button onClick={toggleTheme}>
            <p>{theme} Mode</p>
          </button>
        </div>
        <NavLink to="/" className={navLinkClass}>Home</NavLink>
        <NavLink to="/catalogue" className={navLinkClass}>Catalogue</NavLink>
        <NavLink to="/about" className={navLinkClass}>About</NavLink>
        <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
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