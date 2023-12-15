import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../styles/index.css"
import Intro from "../components/intro"
import Timeline from "../components/timeline"

const IndexPage = () => {
  return (
    <>
      <Layout>
        <Intro />
        <Timeline />
      </Layout>
    </>
  )
}

export const Head = () => <Seo title="Harish" />

export default IndexPage
