import * as React from "react"
import "../styles/projects.css"
import { FaArrowRight } from "react-icons/fa6"

const Projects = ({ id }) => {
  return (
    <>
      <h2 id={id} className="heading" style={{ marginBottom: "3rem" }}>
        Hobby Projects
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <a href="https://github.com/harish2k01/Portfolio" target="_blank">
          <div className="projects-card">
            <FaArrowRight className="project-img" />
            <div className="project-card-content">
              <h3 className="project-card-head">Portfolio Website</h3>
              <p className="text-gray-400">
                A Simple Personal Portfolio Website
              </p>
            </div>
          </div>
        </a>
        <a href="https://github.com/harish2k01/Tic-Tac-Toe" target="_blank">
          <div className="projects-card">
            <FaArrowRight className="project-img" />
            <div className="project-card-content">
              <h3 className="project-card-head">Tic Tac Toe</h3>
              <p className="text-gray-400">
                An Android App to play the classic X or O game with 2 players
              </p>
            </div>
          </div>
        </a>
        <a
          href="https://github.com/harish2k01/Hospital-Management-System-Flask"
          target="_blank"
        >
          <div className="projects-card">
            <FaArrowRight className="project-img" />
            <div className="project-card-content">
              <h3 className="project-card-head">Hospital Management System</h3>
              <p className="text-gray-400">
                A basic & simple Hospital Management System Web App
              </p>
            </div>
          </div>
        </a>
        <a href="https://github.com/harish2k01/Smart-Switch" target="_blank">
          <div className="projects-card">
            <FaArrowRight className="project-img" />
            <div className="project-card-content">
              <h3 className="project-card-head">Smart Switch</h3>
              <p className="text-gray-400">
                A Switch that collects electricity consumption details &
                predicts the future trends
              </p>
            </div>
          </div>
        </a>
      </div>
      <hr className="line" style={{ marginTop: "2.5rem" }} />
    </>
  )
}

export default Projects
