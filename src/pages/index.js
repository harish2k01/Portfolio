import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../styles/index.css"
import Intro from "../components/intro"

const IndexPage = () => {
  return (
    <>
      <Layout>
        <Intro />
        <h2 className="heading">My Timeline</h2>
      </Layout>
    </>
  )
}

export const Head = () => <Seo title="Harish" />

export default IndexPage
