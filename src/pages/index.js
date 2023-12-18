import * as React from "react"
import Layout from "../components/layout"
import Intro from "../components/intro";
import Timeline from "../components/timeline";
import Blog from "../components/blog";
import Skills from "../components/skills";
import Projects from "../components/projects";
import Contact from "../components/contact";
import NavBar from "../components/navigationbar";
import Seo from "../components/seo"

const IndexPage = () => {
  return (
    <>
      <Layout>
        <Intro id="intro" />
        <Timeline id="timeline" />
        <Blog id="blog" />
        <Skills id="techskills" />
        <Projects id="projects" />
        <Contact />
        <NavBar />
      </Layout>
    </>
  )
}

export const Head = () => <Seo title="Harish" />

export default IndexPage
