import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Link } from 'gatsby'

const PrimaryTwoColumnBanner = (props) => (
    <div className="bg-primary text-white py-5 my-5">
        <Container>
            <Row>
                <div className={`col-md-6 text-${props.headerPosition}`}>
                    <h3>{props.header}</h3>
                </div>

                <div className={`col-md-6 text-${props.buttonPosition}`}>
                    {
                        props.buttonText && <Link className="btn btn-outline-light rounded-0 mt-4 px-5">{props.buttonText}</Link>
                    }
                </div>
            </Row>
        </Container>
    </div>
)


export default PrimaryTwoColumnBanner