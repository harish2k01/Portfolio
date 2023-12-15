import * as React from "react"

const Layout = ({ children }) => {
  return (
    <>
      <div
        className="absolute top-0 z-[-2] bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#000_1px)] bg-[size:30px_30px]"
        style={{
          minWidth: "-webkit-fill-available",
          minHeight: "-webkit-fill-available",
        }}
      >
        <div
          className="flex items-center justify-center"
          style={{ margin: "50px", padding: "50px" }}
        >
          <section className="mx-auto max-w-lg px-12 sm:px-0">
            <article className="text-slate-200 slide-in-bottom">
              {children}
            </article>
          </section>
        </div>
      </div>
    </>
  )
}

export default Layout
