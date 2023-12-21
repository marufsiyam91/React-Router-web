import Header from "../Header/Header"
import Footer from '../Footer/Footer'
import { Outlet } from "react-router-dom"

Header

const MainLayout = () => {
  return (
    <div>
          <Header/>
          <hr/>
          <Outlet/>
          <Footer/>
    </div>
  )
}

export default MainLayout
