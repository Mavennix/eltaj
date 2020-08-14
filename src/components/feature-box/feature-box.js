import React from "react"

const FeatureBox = props => {
  return (
    <div className="row align-items-center">
      <div
        className={`col-md-6 text-md-left text-center mb-3 order-first  ${
          props.textFirst ? "order-md-last" : "order-md-first"
          }`}
      >
        <img src={props.image} alt="" width="70%" />
      </div>
      <div className="col-md-6  mb-3 text-md-left text-center">
        <h3>{props.title}</h3>

        <h6 className="text-muted">{props.subtitle}</h6>
      </div>
    </div>
  )
}

export default FeatureBox
