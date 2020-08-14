import React from "react"
import { Link } from "gatsby"
import DropdownButton from "react-bootstrap/DropdownButton"
import Dropdown from "react-bootstrap/Dropdown"
import NavDropdown from "react-bootstrap/NavDropdown"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

const Menu = () => (
  <div className="container">
    {/* <nav class="navbar navbar-expand-lg navbar-light pt-3">
      <Link class="navbar-brand" to="/">
        Navbar
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <NavDropdown title="Dropdown" id="nav-dropdown">
            <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">
              Something else here
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
          </NavDropdown>
          <li class="nav-item active">
            <Link className="nav-link text-dark" to="/">
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link text-dark" to="/about">
              About
            </Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link text-dark" to="/">
              Solutions
            </Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link text-dark" to="/">
              Products
            </Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link text-dark" to="/">
              Industries
            </Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link text-dark" to="/">
              Blog
            </Link>
          </li>

          <li className="ml-md-4 ml-0">
            <button className="btn btn-outline-primary rounded-0 text-center px-4">
              Book a free demo
            </button>
          </li>
        </ul>
      </div>
    </nav> */}
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
          <Nav.Link href="#features">Home</Nav.Link>
          <Nav.Link href="#pricing">About</Nav.Link>
          <NavDropdown title="Solutions" id="solutions-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Propducts" id="products-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Industries" id="industries-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
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
