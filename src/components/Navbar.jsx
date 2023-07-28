
import { Link, } from "react-router-dom";
import { BiCameraMovie } from "react-icons/bi";

import "./Navbar.css";

const Navbar = () => {
  
  return (
    <nav id="navbar">
      <h2>
        <Link to="/">
          <BiCameraMovie /> GiantMovies
        </Link>
      </h2>
      
    </nav>
  );
};

export default Navbar;
