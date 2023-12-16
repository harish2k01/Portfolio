import React from "react"
import "../styles/blog.css"
import { StaticImage } from "gatsby-plugin-image"

const Blog = () => {
  return (
    <>
      <h2 className="heading" style={{ marginBottom: "3rem" }}>
        Blog
      </h2>
      <div className="card">
        <a href="https://harish2k01.in" target="_blank">
          <StaticImage
            src="../images/blog.jpg"
            className="image"
            alt="Blog Image"
          />
          <div className="card-content">
            <h3 className="card-head">Harish's Tech Bytes</h3>
            <p className="text-gray-400">Elevate your tech game with expert tips & guides at Harish's Tech Bytes - Your gateway to Digital Success!</p>
            <p className="text-gray-400" style={{paddingTop: "20px"}}>A Tech Blog with contents covering different domains and tutorials...</p>
          </div>
        </a>
      </div>
      <hr className="line" style={{ marginTop: "2.5rem" }} />
    </>
  )
}

export default Blog
