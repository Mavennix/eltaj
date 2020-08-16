import React from "react"

const InfoSection = props => {
  return (
    <div className="row align-items-start">
      <div
        className={`col-md-6 text-md-left text-center mb-3 order-first  ${
          props.textFirst ? "order-md-last" : "order-md-first"
        }`}
      >
        <img src={props.image} className="img-fluid" alt="" />
      </div>
      <div className="col-md-6  mb-3 text-md-left text-center">
        {props.children}
      </div>
    </div>
  )
}

export default InfoSection
