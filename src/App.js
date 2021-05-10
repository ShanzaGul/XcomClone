import React, { useState } from 'react'
import Main from './pages/Main'
import { Container } from 'react-bootstrap'
import { Row, Col, Nav, Navbar, Button } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
import OurProcess from './pages/OurProcess';
import "./App.css"
import logo from './assets/xcom.png'
import { GrFacebookOption, GrTwitter, GrYoutube, GrLinkedinOption, GrInstagram } from 'react-icons/gr'
import { AiOutlineMail } from 'react-icons/ai'
import AwsMigration from './pages/AwsMigration';
import SalesEnablement from './pages/SalesEnablement';
import UIApp from './pages/UIApp';
import MbAppDev from './pages/MbAppDev';
import OurClients from './pages/OurClients';


function App() {

  const [nav, setNav] = useState(false);


  const changeBackgroundColor = () => {
    if (window.scrollY > 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  }

  window.addEventListener('scroll', changeBackgroundColor)



  return (
    <div className="App">
      <Container className="p-0" fluid>
       
        <Row className="main-navbar m-0">
          <Col className="p-0">


          {!nav ? <>
            <Row className="contact-nav p-header m-0">
              <Col xs={6} className="d-flex flex-row">
                <AiOutlineMail color="#DDDDDD" size="21" style={{ marginTop: "13px" }} />
                <p style={{ fontSize: "13px", marginTop: "13px", marginLeft: "5px", fontWeight: "500" }}>sales@abc.com</p>
              </Col>
              <Col xs={6} className="text-right contact-nav-col">
                <a href="https://facebook.com">
                  <GrFacebookOption color="#DDDDDD" className="mt-3" size="15" />
                </a>
                <a href="https://facebook.com" >
                  <GrTwitter color="#DDDDDD" className="mt-3" size="12" />
                </a>
                <a href="https://twitter.com" >
                  <GrYoutube color="#DDDDDD" className="mt-3" size="13" />
                </a>
                <a href="https://facebook.com">
                  <GrLinkedinOption color="#DDDDDD" className="mt-3" size="15" />
                </a>
                <a href="https://facebook.com">
                  <GrInstagram color="#DDDDDD" className="mt-3" size="12" />
                </a>
              </Col>
            </Row>
          </> : ""}




          <Row className={nav ? "navbar-row m-0 active p-header" : "navbar-row m-0 p-header"}>
            <Col xs={12}>
              <Navbar className="pl-0 pr-0" expand="lg">
                <Navbar.Brand href="#home"><img
                  alt=""
                  src={logo}
                  width="70"
                  height="70"
                  className="d-inline-block align-top"
                />{' '}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse>
                  <Nav className="ml-auto">
                    <Nav.Link href="#home"><span className="navlink">AWS Migration</span></Nav.Link>
                    <Nav.Link href="#link"><span className="navlink">Sales Enablement</span></Nav.Link>
                    <Nav.Link href="#home"><span className="navlink">UI & Applications</span></Nav.Link>
                    <Nav.Link href="#link"><span className="navlink">App Development</span></Nav.Link>
                    <Nav.Link href="#home"><span className="navlink">Team</span></Nav.Link>
                    <Nav.Link href="#link"><span className="navlink">Blog</span></Nav.Link>
                    <Nav.Link href="#link"><span className="navlink">Career</span></Nav.Link>
                    <Button className="pt-2 pb-2 pl-4 pr-4 ml-2 btn-nav" >Visit X-96</Button>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </Col>
          </Row>

          </Col>
        </Row>
        <Main />
        <OurProcess />
        <AwsMigration />
        <SalesEnablement />
        <UIApp />
        <MbAppDev />
        <OurClients />
      </Container>

    </div>
  );
}

export default App;
