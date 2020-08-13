import React from "react"
import footerMenu from "../../data/footer-menu"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <div className="container">
      <div className="row">
        {footerMenu.map(menu => (
          <div className="col-3">
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

        <div className="col-3">
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
    </div>
  )
}

export default Footer
