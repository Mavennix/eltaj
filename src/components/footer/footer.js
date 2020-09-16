import React from "react"
import footerMenu from "../../data/footer-menu"
import { Link } from "gatsby"
import QmaticLogo from "../../images/qmatic-logo.png"
import socialMedia from "../../data/social-media"
const Footer = () => {
  return (
    <div className="container">
      <div className="row border-bottom">
        {footerMenu.map(menu => (
          <div className="col-lg-3 col-md-6 mb-5">
            <h3>{menu.title}</h3>
            <ul className="nav flex-column">
              {menu.menuItems.map(menuItem => (
                <li className="nav-item">
                  <Link className="nav-link px-0 py-1 text-muted" to={menuItem.to}>
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
            <li className="nav-item">
              <p className="nav-link px-0 py-1 text-muted">
                info@eltajsolutions.com
              </p>
            </li>
            <li className="nav-item">
              <p className="nav-link px-0 py-1 text-muted">+234-811-999-8880</p>
            </li>
            <li className="nav-item">
              <p className="nav-link px-0 py-1 text-muted">
                ELTAJ Solutions Ltd. Eko Atlantic City, Bar Beach, Eko Pearl
                Towers, Victoria Island, Lagos Nigeria
              </p>
            </li>
            
            <li className="nav-item">
              <ul className="nav">
                {
                  socialMedia.map((sm, index)=> <li key={index}>
                    <a className="mr-3" rel="noreferrer" target="_blank" href={sm.link}><img src={sm.icon} height="30" alt=""/></a>
                  </li>)
                }
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="d-flex flex-column-reverse flex-lg-row justify-content-between my-5 text-center text-lg-left">
        <div className="text-muted d-flex flex-column">
          <small>
            Copyright © 2016 - 2020. ELTAJ Solutions Ltd.
          </small>
          <small>All rights reserved.</small>
        </div>
        <div>
          <img className="mb-4 mb-lg-0" src={QmaticLogo} alt="" height="30"/>
        </div>
      </div>
    </div>
  )
}

export default Footer
