import * as React from "react"
import "../styles/skills.css"
import {
  FaJava,
  FaPython,
  FaCss3Alt,
  FaHtml5,
  FaBootstrap,
} from "react-icons/fa6"
import { SiGrafana, SiTailwindcss } from "react-icons/si"
import { RiGatsbyFill } from "react-icons/ri"
import { TbApi, TbSettingsAutomation } from "react-icons/tb"
import { IoLogoJavascript } from "react-icons/io5"
import { FaGitAlt, FaNode } from "react-icons/fa"

const Skills = () => {
  return (
    <>
      <h2 className="heading" style={{ marginBottom: "3rem" }}>
        Tech & Skills
      </h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="skills-card">
          <FaHtml5 className="skills-img" />
          <span>HTML</span>
        </div>
        <div className="skills-card">
          <FaCss3Alt className="skills-img" />
          <span>CSS</span>
        </div>
        <div className="skills-card">
          <FaBootstrap className="skills-img" />
          <span>Bootstrap</span>
        </div>
        <div className="skills-card">
          <SiTailwindcss className="skills-img" />
          <span>Tailwind</span>
        </div>
        <div className="skills-card">
          <RiGatsbyFill className="skills-img" />
          <span>GatsbyJS</span>
        </div>
        <div className="skills-card">
          <FaJava className="skills-img" />
          <span>Java</span>
        </div>
        <div className="skills-card">
          <FaPython className="skills-img" />
          <span>Python</span>
        </div>
        <div className="skills-card">
          <TbApi className="skills-img" />
          <span>REST API</span>
        </div>
        <div className="skills-card">
          <IoLogoJavascript className="skills-img" />
          <span>Javascript</span>
        </div>
        <div className="skills-card">
          <SiGrafana className="skills-img" />
          <span>Grafana K6</span>
        </div>
        <div className="skills-card">
          <TbSettingsAutomation className="skills-img" />
          <span style={{textAlign: "center"}}>QA & Automation</span>
        </div>
        <div className="skills-card">
          <FaNode className="skills-img" />
          <span>NodeJS</span>
        </div>
      </div>
      <hr className="line" style={{ marginTop: "2.5rem" }} />
    </>
  )
}

export default Skills
