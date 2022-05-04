import { useEffect, useState } from "react"
import { Navbar, Container, Nav } from "react-bootstrap"

import styles from './navbar.module.css'

import Logo from '../../assets/logo/logo'
import ProductMenu from "./productMenu/ProductMenu"
import SupportMenu from "./supportMenu/SupportMenu"

export default function NavBar() {
  const [showProduct, setShowProduct] = useState(false)
  const [showSupport, setShowSupport] = useState(false)

  useEffect(() => {
    if (showProduct)
      setShowSupport(false)
  }, [showProduct])

  useEffect(() => {
    if (showSupport)
      setShowProduct(false)
  }, [showSupport])

  const openApp = () => {
    fetch('/api/open_website', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }).then(res => {
      if (res.status == 200) {
        res.json().then(data => {
          window.location.assign(data.url)
        })
      }
    })
  }

  return (
    <Navbar expand="lg" className={styles.content}>
      <Container>
        <Navbar.Brand href="/"><Logo /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="me-auto">
            <div>
              <Nav.Link
                onMouseOver={() => setShowProduct(true)}
                className={["fontColor fontNavbar", showProduct ? styles.fontBold : '']}
              >
                ผลิตภัณฑ์
              </Nav.Link>
              {showProduct ?
                <ProductMenu setShowProduct={setShowProduct} />
                :
                <></>
              }
            </div>
            <Nav.Link href="/" className="fontColor fontNavbar">ราคา</Nav.Link>
            <div>
              <Nav.Link
                onMouseOver={() => setShowSupport(true)}
                className={["fontColor fontNavbar", showSupport ? styles.fontBold : '']}
              >
                ซัพพอร์ต
              </Nav.Link>
              {showSupport ?
                <SupportMenu setShowSupport={setShowSupport} />
                :
                <></>
              }
            </div>
            <Nav.Link href="/" className="fontColor fontNavbar">บทความ</Nav.Link>
            <Nav.Link href="/" className="fontColor fontNavbar">ร่วมงานกับเรา</Nav.Link>
          </Nav>
          <Nav className="justify-content-end" >
            <Nav.Item>
              <Nav.Link className="fontColor fontNavbar"><div onClick={() => openApp()}>เข้าสู่ระบบ</div></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/login" className="fontColor fontNavbar">เริ่มต้นใช้งาน</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}