import { Navbar } from "../NavBar/NavBar";
import { Footer } from "../Footer/Footer";

export const BasicLayout = ({children}) =>{
  return(
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

