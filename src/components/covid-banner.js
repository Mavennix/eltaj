import React from "react"
import CovidImg from "../images/landing-page/covid.svg"

const CovidBanner = () => {
  return (
    <>
      <div className="bg-light" style={{ borderRadius: "50px" }}>
        <div className="row">
          <div className="col-lg-6 col-md-7 p-5 d-flex flex-column justify-content-between">
            <h3 className="text-primary">ELTAJ’s Response to COVID-19</h3>
            <h6 className="text-muted">
              ELTAJ is helping enterprises transform their customer journey
              during COVID-19 Pandemic and beyond.
            </h6>
            <div>
              <button className="btn btn-primary rounded-0">Learn more</button>
            </div>
          </div>
          <div className="col-lg-6 col-md-5 order-md-last order-first">
            <img style={{ objectFit: "cover",  borderRadius: "50px"}} src={CovidImg} alt="" width="100%" height="100%" />
          </div>
        </div>
      </div>
    </>
  )
}

export default CovidBanner
