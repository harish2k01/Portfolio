import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Intro from "../components/intro"
import Timeline from "../components/timeline"
import Blog from "../components/blog"
import Skills from "../components/skills"

const IndexPage = () => {
  return (
    <>
      <Layout>
        <Intro />
        <Timeline />
        <Blog />
        <Skills />
      </Layout>
    </>
  )
}

export const Head = () => <Seo title="Harish" />

export default IndexPage
