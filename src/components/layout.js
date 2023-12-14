import * as React from "react"

const Layout = ({ children }) => {
  return (
    <>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#000_1px)] bg-[size:30px_30px]">
        <div class="h-screen flex items-center justify-center">
          <main>{children}</main>
        </div>
      </div>
    </>
  )
}

export default Layout
