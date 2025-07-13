import * as React from "react"
import "../styles/intro.css"
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa6"

const Intro = ({ id }) => {
  const linkedinPage = () => {
    window.open("https://www.linkedin.com/in/harish2k01/", "_blank")
  }

  const githubPage = () => {
    window.open("https://github.com/harish2k01/", "_blank")
  }

  const mediumPage = () => {
    window.open("https://harish2k01.medium.com/", "_blank")
  }

  return (
    <>
      <div id={id} className="status-container">
        <div className="green-circle"></div>
        <span>Online</span>
      </div>
      <h1 className="text-4xl sm:text-5xl font-semibold mt-5 tracking-wider">
        Hi, I'm Harish
        <br />
        <span
          className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mt-2 block"
          style={{ paddingBottom: "3px" }}
        >
          Automation Engineer, Quality Engineering
        </span>
      </h1>
      <div className="button-group">
        <button className="button" onClick={linkedinPage}>
          <FaLinkedin className="button-icon" />
          <span>LinkedIn</span>
        </button>
        <button className="button" onClick={githubPage}>
          <FaGithub className="button-icon" />
          <span>GitHub</span>
        </button>
        <button className="button" onClick={mediumPage}>
          <FaMedium className="button-icon" />
          <span>Medium</span>
        </button>
      </div>
      <p className="text-gray-400 text-lg tracking-wide mt-9">
        Automation Engineer with 2.5 years of experience, adept at 
        identifying software issues. Proficient in REST API Automation (Python, Robot Framework) 
        and Performance Testing (K6). Actively shares insights through blogs. Passionate 
        about exploring new technologies for collaborative advancement.
      </p>
      <hr className="line" />
    </>
  )
}

export default Intro
