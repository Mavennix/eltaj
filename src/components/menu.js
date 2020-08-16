import React from "react"
import { Link } from "gatsby"
import DropdownButton from "react-bootstrap/DropdownButton"
import Dropdown from "react-bootstrap/Dropdown"
import NavDropdown from "react-bootstrap/NavDropdown"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

const style = {
  color: '#17161A',
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
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto mr-3">
          <Nav.Link><Link to="/" style={style} activeStyle={activeStyle}>Home</Link></Nav.Link>
          <Nav.Link><Link to="/about" style={style} activeStyle={activeStyle}>About</Link></Nav.Link>
          <NavDropdown title="Solutions" id="solutions-nav-dropdown">
            <NavDropdown.Item><Link to="/queue-management" style={style}>Queue Management</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to="/customer-journey-management" style={style}>Customer Journey Management</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to="/customer-feedback" style={style}>Customer Feedback</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to="/business-intelligence" style={style}>Business Intelligence</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to="/virtual-queuing-system" style={style}>Virtual Queuing System</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to="/distributed-operations" style={style}>Distributed Operations</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to="/online-appointment-booking" style={style}>Online Appointment Booking</Link></NavDropdown.Item>


          </NavDropdown>
          <NavDropdown title="Products" id="products-nav-dropdown">
            <NavDropdown.Item><Link to="/qmatic-orchestra-7" style={style}>Enterprise: Qmatic Orchestra 7</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to="/qmatic-solo" style={style}>Single Location: Solo</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to="/qmatic-cloud-solution" style={style}>Qmatic Cloud Solution</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to="/self-service-kiosk" style={style}>Self Service Kiosk</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to="/digital-signage" style={style}>Digital Signage</Link></NavDropdown.Item>
          </NavDropdown>


          <NavDropdown title="Industries" id="industries-nav-dropdown">
            <NavDropdown.Item><Link to="/finance" style={style}>Finance</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to="/healthcare" style={style}>Health Care</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to="/telecom" style={style}>Telecom</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to="/public-sector" style={style}>Public Sector</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to="/retail" style={style}>Retail</Link></NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <button className="btn btn-outline-primary rounded-0 text-center px-4">
            Book a free demo
          </button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
)

export default Menu
