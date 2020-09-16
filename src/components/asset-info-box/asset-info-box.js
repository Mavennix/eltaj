import React from "react"

const AssetInfoBox = (props) => {
  return (
    <>
      <div className="p-3 shadow rounded w-100 mb-5">
        <div
          className="d-flex"
          style={{ height: "80px", width: "80px" }}
        >
          <img src={props.image} alt="" />
        </div>
        <h5 className="text-left my-4">{props.title}</h5>
        <div className="text-muted text-left">
          <small> {props.subtitle}</small>
        </div>
      </div>
    </>
  )
}

export default AssetInfoBox
