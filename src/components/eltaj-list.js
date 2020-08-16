import React from "react"
import BulletPointIcon from "../images/icons/bullet-icon.svg"

const EltajList = props => {
  return (
    <div className="d-flex align-items-top my-3">
      <img src={BulletPointIcon} className="mr-3" height="30px" alt="" /> <h5 className="font-weight-normal text-primary text-left">{props.text}</h5>
    </div>
  )
}

export default EltajList
