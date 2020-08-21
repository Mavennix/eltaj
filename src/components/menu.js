import React from "react"
import { Link } from "gatsby"
import DropdownButton from "react-bootstrap/DropdownButton"
import Dropdown from "react-bootstrap/Dropdown"
import NavDropdown from "react-bootstrap/NavDropdown"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import EltajLogo from "../images/eltajlogo.svg"

const style = {
  color: '#7e7e7e',
  textDecoration: 'none'
}

const activeStyle = {
  color: '#FF0000',
}

const Menu = () => (
  <div className="container">
    <Navbar
      collapseOnSelect
      expand="lg"
      className="pt-3 px-0 justify-content-between "
      bg="white"
      variant="light"
    >
      <Navbar.Brand href="#home"><img src={EltajLogo} alt=""/></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto mr-3">
          <Nav.Link as={Link} to="/" style={style} activeStyle={activeStyle}>Home</Nav.Link>
          <Nav.Link as={Link} to="/about" style={style} activeStyle={activeStyle}>About</Nav.Link>
          <NavDropdown title="Solutions" id="solutions-nav-dropdown">
            <NavDropdown.Item as={Link} to="/queue-management" style={style}>Queue Management</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/customer-journey-management" style={style}>Customer Journey Management</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/customer-feedback" style={style}>Customer Feedback</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/business-intelligence" style={style}>Business Intelligence</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/virtual-queuing-system" style={style}>Virtual Queuing System</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/distributed-operations" style={style}>Distributed Operations</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/online-appointment-booking" style={style}>Online Appointment Booking</NavDropdown.Item>


          </NavDropdown>
          <NavDropdown title="Products" id="products-nav-dropdown">
            <NavDropdown.Item as={Link} to="/qmatic-orchestra-7" style={style}>Enterprise: Qmatic Orchestra 7</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/qmatic-solo" style={style}>Single Location: Solo</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/qmatic-cloud-solution" style={style}>Qmatic Cloud Solution</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/self-service-kiosk" style={style}>Self Service Kiosk</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/digital-signage" style={style}>Digital Signage</NavDropdown.Item>
          </NavDropdown>


          <NavDropdown title="Industries" id="industries-nav-dropdown">
            <NavDropdown.Item as={Link} to="/finance" style={style}>Finance</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/healthcare" style={style}>Health Care</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/telecom" style={style}>Telecom</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/public-sector" style={style}>Public Sector</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/retail" style={style}>Retail</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Link to="/book-demo">
          <button className="btn btn-outline-primary rounded-0 text-center px-4">
            Book a free demo
          </button>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
)

export default Menu
