import * as React from "react"
import "../styles/navigationbar.css"
import { FaHome } from "react-icons/fa"
import { FaLaptop, FaPencil } from "react-icons/fa6"
import { IoNewspaperOutline } from "react-icons/io5"
import { GrTechnology } from "react-icons/gr";

const NavBar = () => {
  return (
    <>
      <div className="nav-div">
        <nav className="nav">
          <div className="nav-img">
            <FaHome className="nav-div-img" />
          </div>
          <div className="nav-img">
            <FaLaptop className="nav-div-img" />
          </div>
          <div className="nav-img">
            <IoNewspaperOutline className="nav-div-img" />
          </div>
          <div className="nav-img">
            <GrTechnology className="nav-div-img" />
          </div>
          <div className="nav-img">
            <FaPencil className="nav-div-img" />
          </div>
        </nav>
      </div>
    </>
  )
}

export default NavBar
