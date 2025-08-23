import * as React from "react"
import "../styles/skills.css"
import {
  FaJava,
  FaPython,
  FaCss3Alt,
  FaHtml5,
  FaBootstrap,
} from "react-icons/fa6"
import { SiGrafana, SiTailwindcss, SiRobotframework, SiKubernetes, SiK6, SiPrometheus } from "react-icons/si"
import { RiGatsbyFill } from "react-icons/ri"
import { TbApi} from "react-icons/tb"
import { IoLogoJavascript, IoLogoDocker } from "react-icons/io5"
import { FaGit, FaGithub, FaJenkins, FaLinux } from "react-icons/fa"

const Skills = ({ id }) => {
  return (
    <>
      <h2 id={id} className="heading" style={{ marginBottom: "3rem" }}>
        Tech & Skills
      </h2>
      <div className="grid grid-cols-4 gap-2">
        <div className="skills-card">
          <FaPython className="skills-img" />
          <span>Python</span>
        </div>
        <div className="skills-card">
          <TbApi className="skills-img" />
          <span style={{textAlign: "center"}}>REST API Automation</span>
        </div>
        <div className="skills-card">
          <SiRobotframework className="skills-img" />
          <span style={{textAlign: "center"}}>Robot Framework</span>
        </div>
        <div className="skills-card">
          <SiK6 className="skills-img" />
          <span>K6</span>
        </div>
        <div className="skills-card">
          <SiKubernetes className="skills-img" />
          <span>Kubernetes</span>
        </div>
        <div className="skills-card">
          <IoLogoDocker className="skills-img" />
          <span>Docker</span>
        </div>
        <div className="skills-card">
          <FaGit className="skills-img" />
          <span>Git</span>
        </div>
        <div className="skills-card">
          <FaGithub className="skills-img" />
          <span>GitHub Actions</span>
        </div>
        <div className="skills-card">
          <FaJenkins className="skills-img" />
          <span>Jenkins</span>
        </div>
        <div className="skills-card">
          <SiGrafana className="skills-img" />
          <span>Grafana</span>
        </div>
        <div className="skills-card">
          <SiPrometheus className="skills-img" />
          <span>Prometheus</span>
        </div>
        <div className="skills-card">
          <FaLinux className="skills-img" />
          <span>Linux</span>
        </div>
        <div className="skills-card">
          <IoLogoJavascript className="skills-img" />
          <span>Javascript</span>
        </div>
        <div className="skills-card">
          <FaJava className="skills-img" />
          <span>Java</span>
        </div>
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
      </div>
      <hr className="line" style={{ marginTop: "2.5rem" }} />
    </>
  )
}

export default Skills
