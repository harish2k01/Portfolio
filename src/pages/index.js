import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import "../styles/global.css"
import * as styles from "../styles/index.module.scss"

const IndexPage = () => (
  <Layout>
    <div>
      <section className="mx-auto max-w-lg px-12 sm:px-0">
        <article className="text-slate-200 slide-in-bottom">
          <h1 className="text-4xl sm:text-5xl font-semibold mt-5 tracking-wider">
            Hi, I'm <span class="marker">Harish</span>
            <br />
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mt-2 block" style={{paddingBottom: '3px'}}>
              Software Engineer
            </span>
          </h1>
          <p className="text-gray-400 text-lg tracking-wide mt-9">
            Hey, I am Harish, Software Engineer from Madurai, with 1.5
            years of expertise in Automation and Performance Tests. A Tech Explorer 
            who is currently into Home Lab!
          </p>
          <hr className="my-5 opacity-30" />
          <h2 className="text-2xl font-semibold">My Timeline</h2>
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
