import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../styles/global.css"
import "../styles/index.css"
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa6"

const githubPage = () => {
  window.open("https://github.com/harish2k01", "_blank")
}

const linkedinPage = () => {
  window.open("https://www.linkedin.com/in/harish2k01", "_blank")
}

const mediumPage = () => {
  window.open("https://harish2k01.medium.com/", "_blank")
}

const IndexPage = () => (
  <Layout>
    <div>
      <div className="status-container">
        <div className="green-circle"></div>
        <span>Online</span>
      </div>
      <section className="mx-auto max-w-lg px-12 sm:px-0">
        <article className="text-slate-200 slide-in-bottom">
          <h1 className="text-4xl sm:text-5xl font-semibold mt-5 tracking-wider">
            Hi, I'm <span class="marker">Harish</span>
            <br />
            <span
              className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mt-2 block"
              style={{ paddingBottom: "3px" }}
            >
              Software Engineer
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
            Hey, I am Harish, Software Engineer from Madurai, with 1.5 years of
            expertise in Automation and Performance Tests. A Tech Explorer who
            is currently into Home Lab!
          </p>
          <hr className="line" />
          <h2 className="heading">My Timeline</h2>
        </article>
      </section>
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Harish" />

export default IndexPage
