import * as React from "react"

const Contact = () => {
  return (
    <>
      <h2 className="heading" style={{ marginBottom: "2rem" }}>
        Contact Me
      </h2>
      <p className="tracking-wide">
        For any queries kindly drop a mail at{" "}
        <a href="mailto:t.harish2478@gmail.com" className="text-gray-400">t.harish2478@gmail.com</a>
      </p>
      <hr className="line" style={{ marginTop: "2.5rem" }} />
    </>
  )
}

export default Contact
