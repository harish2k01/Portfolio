import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { FaHouse } from "react-icons/fa6"

const NotFoundPage = () => {
  const homePage = () => {
    window.location.href = "/"
  }

  return (
    <Layout>
      <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-white">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-400">
            Sorry, we couldn’t find the page you’re looking for!
          </p>
          <div className="flex items-center justify-center">
            <button className="button" onClick={homePage}>
              <FaHouse className="button-icon" />
              <span>Home</span>
            </button>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
