import React from 'react'

const Client = props => (
    <div className="col-md-12 pt-3">
        <div className="row">
            <div className="col-md-2 mb-3 text-center">
                <img src={props.image} alt={props.name} className="img-fluid" />
            </div>
        </div>
    </div>
)

export default Client