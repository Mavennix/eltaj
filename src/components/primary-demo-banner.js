import React from 'react'
import { Link } from "gatsby"

const PrimaryDemoBanner = () => {
    return (
        <div className="bg-primary text-white text-center py-5 my-5">
        <div className="py-4">
          <h2>Would you like to see our products in action?</h2>
          <Link className="btn btn-outline-light rounded-0 mt-4 px-5">
            Book a free demo
          </Link>
        </div>
      </div>
    )
}

export default PrimaryDemoBanner
