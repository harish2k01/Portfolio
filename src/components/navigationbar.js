import * as React from "react"
import { Link } from "react-scroll"
import "../styles/navigationbar.css"
import { FaHome } from "react-icons/fa"
import { FaLaptop, FaPencil } from "react-icons/fa6"
import { IoNewspaperOutline } from "react-icons/io5"
import { GrTechnology } from "react-icons/gr"

const NavBar = () => {
  return (
    <>
      <div className="nav-div">
        <nav className="nav">
          <Link to="intro" smooth={true} duration={500}>
            <div className="nav-img">
              <FaHome className="nav-div-img" />
            </div>
          </Link>
          <Link to="timeline" smooth={true} duration={500}>
            <div className="nav-img">
              <FaLaptop className="nav-div-img" />
            </div>
          </Link>
          <Link to="blog" smooth={true} duration={500}>
            <div className="nav-img">
              <IoNewspaperOutline className="nav-div-img" />
            </div>
          </Link>
          <Link to="techskills" smooth={true} duration={500}>
            <div className="nav-img">
              <GrTechnology className="nav-div-img" />
            </div>
          </Link>
          <Link to="projects" smooth={true} duration={500}>
            <div className="nav-img">
              <FaPencil className="nav-div-img" />
            </div>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
