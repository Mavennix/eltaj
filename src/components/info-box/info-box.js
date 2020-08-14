import React from "react"

const InfoBox = props => {
  return (
    <div className="shadow p-4 rounded w-100">
      <div className="d-flex justify-content-between align-items-start mb-3">
        <span className="rounded py-1 px-2  bg-light"><small>{props.caption}</small></span>
        <div className="">
          <img className="" src={props.icon} height="50" alt=""/>
        </div>
      </div>
        <div className="row mb-5">
            <div className="col-lg-9">
            <h4>{props.title}</h4>

            <div className="red-hr"></div>
            </div>
        </div>
      
      <small className="text-muted">{props.subtitle}</small>
    </div>
  )
}

export default InfoBox
