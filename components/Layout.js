import NavBar from "./navbar/Navbar"
import Footer from "./footer/footer"

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  )
}