import React from 'react'

const Client = props => (
    <div className="col-md-2 mb-3 text-center mb-md-0 mb-3">
        <img src={props.image} alt={props.name} className="img-fluid" />
    </div>
)

export default Client