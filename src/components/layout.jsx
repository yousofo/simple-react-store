import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import { createContext, useState } from "react";
const colorMode = createContext(null);

const Layout = () => {
  const [dark, setDark] = useState(false)
  const backgroundColor = dark ? "#0f0f0f" :"#fff";
  const textColor =dark? "text-gray-200":"text-gray-800";

  return (
    <>
      <colorMode.Provider value={{ dark: dark, setDark: setDark, backgroundColor:backgroundColor, textColor:textColor }}>
        <Header />
        <main className={`${textColor} yn-transition flex-1`} style={{backgroundColor:`${dark?"#0f0f0f":"#fff"}`}} >
          <Outlet />
        </main>
        <Footer />
      </colorMode.Provider>
    </>
  )
}
export default Layout
export { colorMode }