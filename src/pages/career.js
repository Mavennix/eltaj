import React from 'react'
import Layout from '../components/layout'
import PrimaryDemoBanner from '../components/primary-demo-banner'
import { Row, Container } from 'react-bootstrap'
import CardWithBoxShadow from '../components/card'

// images import
import PassionImage from '../images/icons/heart.svg'
import CollaborationImage from '../images/icons/collaboration.svg'
import CreedImage from '../images/icons/creed.svg'
import ClockImage from '../images/icons/time.svg'

const Career = () => {
    return (
        <Layout>
            <div
                className="d-flex align-items-center justify-content-center flex-column py-5"
                style={{ backgroundImage: "radial-gradient( #FFFFFF, #CBCEFF)", minHeight: "50vh" }}
            >
                <h2 className="mt-5 pt-4">ADVANCE YOUR CAREER WITH US</h2>
                <Row className="mb-5 pb-4">
                    <div className="col-md-7 mx-auto mt-3 text-center">
                        <h6 className="text-center" >At Eltaj, we practise a culture where problem solvers and innovators like you can have the best working experience. Yes, we provide you with a flexible environment, where you can grow your career while helping solve the challenges customers face in our world today.</h6>

                        <button className="btn btn-primary rounded-0 text-center px-4 mt-5">
                            See all open positions
              </button>
                    </div>
                </Row>
            </div>


            <Container className="my-5 py-4">
                <Row className="mt-4">
                    <div className="col-md-4 mx-auto">
                        <h3 className="text-center text-capitalize">Be part of a team with a unified voice</h3>
                    </div>
                </Row>

                <Row>
                    <div className="col-md-7 mx-auto mt-3">
                        <p className="text-muted text-center">Our team is on a journey to create digitals solutions to solve customer problems as they arise.</p>
                    </div>
                </Row>


                <Row className="mt-5 mb-4">
                    <div className="col-md-3 mb-md-0 mb-3">
                        <CardWithBoxShadow>
                            <img src={PassionImage} style={{ maxWidth: '40px' }} />

                            <h5 className="pt-3">Passion</h5>

                            <p className="pt-2 text-muted small">We have a strong desire for innovation and problem-solving.</p>
                        </CardWithBoxShadow>
                    </div>

                    <div className="col-md-3 mb-md-0 mb-3">
                        <CardWithBoxShadow>
                            <img src={CollaborationImage} style={{ maxWidth: '40px' }} />

                            <h5 className="pt-3">Collaboration</h5>

                            <p className="pt-2 text-muted small">Goals are achieved by welcoming each team member’s point of view.</p>
                        </CardWithBoxShadow>
                    </div>

                    <div className="col-md-3 mb-md-0 mb-3">
                        <CardWithBoxShadow>
                            <img src={CreedImage} style={{ maxWidth: '40px' }} />

                            <h5 className="pt-3">Creed</h5>

                            <p className="pt-2 text-muted small">We have a pact to help each succeed beyond the Eltaj’s space.</p>
                        </CardWithBoxShadow>
                    </div>

                    <div className="col-md-3 mb-md-0 mb-3">
                        <CardWithBoxShadow>
                            <img src={ClockImage} style={{ maxWidth: '40px' }} />

                            <h5 className="pt-3">Time</h5>

                            <p className="pt-2 text-muted small">Fun doesn’t stop the work from getting done. So, we create time for that.</p>
                        </CardWithBoxShadow>
                    </div>
                </Row>

                <Row>
                <button className="btn btn-primary rounded-0 text-center px-4 mt-5 mx-auto">
                            See all open positions
              </button>
                </Row>
            </Container>


            <PrimaryDemoBanner />
        </Layout>
    )
}

export default Career