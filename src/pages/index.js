import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Intro from "../components/intro"
import Timeline from "../components/timeline"
import Blog from "../components/blog"

const IndexPage = () => {
  return (
    <>
      <Layout>
        <Intro />
        <Timeline />
        <Blog />
      </Layout>
    </>
  )
}

export const Head = () => <Seo title="Harish" />

export default IndexPage
