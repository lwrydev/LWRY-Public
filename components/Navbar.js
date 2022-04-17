import { useState } from "react"
import { Navbar, Container, Nav } from "react-bootstrap"

import styles from './navbar.module.css'

import Logo from '../assets/logo/logo'

export default function NavBar() {
  const [user, setUser] = useState(null)
  return (
    <Navbar expand="lg" className={styles.content}>
      <Container>
        <Navbar.Brand href="/"><Logo /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="me-auto">
            <Nav.Link href="/" className="fontColor fontNavbar">ผลิตภัณฑ์</Nav.Link>
            <Nav.Link href="/" className="fontColor fontNavbar">ราคา</Nav.Link>
            <Nav.Link href="/" className="fontColor fontNavbar">ซัพพอร์ต</Nav.Link>
            <Nav.Link href="/" className="fontColor fontNavbar">บทความ</Nav.Link>
            <Nav.Link href="/" className="fontColor fontNavbar">ร่วมงานกับเรา</Nav.Link>
          </Nav>
          <Nav className="justify-content-end" >
            <Nav.Item>
              <Nav.Link href="/login" className="fontColor fontNavbar">เข้าสู่ระบบ</Nav.Link>
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