import React from "react"
import { Link } from "gatsby"


const SecondaryDemoBanner = () => {
  return (
    <div className="bg-primary my-5">
      <div className="container py-5">
        <div className="row text-white py-4">
          <div className="col-lg-8">
            <h6 className="m-0">Schedule a free consultation</h6>
            <h2>
              Do you want to know if ELTAJ solution is a good fit for your
              business needs?
            </h2>
          </div>
          <div className="col-lg-4 d-lg-flex justify-content-end align-items-center">
            {" "}
            <Link className="btn btn-outline-light rounded-0 mt-4 px-5">
              Book a free demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecondaryDemoBanner
