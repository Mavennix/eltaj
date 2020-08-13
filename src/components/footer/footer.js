import React from "react"
import footerMenu from "../../data/footer-menu"
import { Link } from "gatsby"
import QmaticLogo from "../../images/qmatic-logo.png"
const Footer = () => {
  return (
    <div className="container">
      <div className="row border-bottom">
        {footerMenu.map(menu => (
          <div className="col-lg-3 col-md-6 mb-5">
            <h3>{menu.title}</h3>
            <ul className="nav flex-column">
              {menu.menuItems.map(menuItem => (
                <li class="nav-item">
                  <Link class="nav-link px-0 py-1 text-muted" href="#">
                    {menuItem.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="col-lg-3 col-md-6 mb-5">
          <h3>Contact us</h3>
          <ul className="nav flex-column">
            <li class="nav-item">
              <p class="nav-link px-0 py-1 text-muted">
                info@eltajsolutions.com
              </p>
            </li>
            <li class="nav-item">
              <p class="nav-link px-0 py-1 text-muted">+234-808-829-1121</p>
            </li>
            <li class="nav-item">
              <p class="nav-link px-0 py-1 text-muted">
                ELTAJ Solutions Ltd. Eko Atlantic City, Bar Beach, Eko Pearl
                Towers, Victoria Island, Lagos Nigeria
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="d-flex justify-content-between my-5">
        <div className="text-muted d-flex flex-column">
          <small>
            Copyright © 2016 - 2020. ELTAJ Solutions Ltd.
          </small>
          <small>All rights reserved.</small>
        </div>
        <div>
          <img src={QmaticLogo} alt="" height="30"/>
        </div>
      </div>
    </div>
  )
}

export default Footer
