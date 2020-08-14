import React from "react"
import ImageGrid from ".././../images/image-grid.svg"
import "./eltaj-image.scss"

const EltajImage = props => {
    console.log(props)
  return (
    <div className={`w-100 position-relative eltaj-image ${props.isImageRight === true ? "text-md-right" : "text-left"}`}>
      <img className="img-fluid" src={props.image} alt="" />
      <img className={`position-absolute image-grid d-none d-md-block ${props.isImageRight === true ? "grid-left" : "grid-right"}`} src={ImageGrid} alt="" />
    </div>
  )
}

export default EltajImage
