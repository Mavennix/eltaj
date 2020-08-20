import React from 'react'
import Layout from '../components/layout'
import PrimaryDemoBanner from '../components/primary-demo-banner'
import CardWithBoxShadow from '../components/card'
import { Row, Container } from 'react-bootstrap'
import VeryDayLogo from '../images/partners/veryday.png'
import QmaticLogo from '../images/qmatic-logo-2.svg'

const Partners = () => {
    return (
        <Layout>
            <div
                className="d-flex align-items-center justify-content-center flex-column"
                style={{ backgroundImage: "radial-gradient( #FFFFFF, #CBCEFF)", minHeight: "50vh" }}
            >
                <h2>Our Partners</h2>
                <h6 >Eltaj is a premium partner to global companies.</h6>
            </div>

            <Container className="my-5 py-4">
                <Row>
                    <div className="col-md-1"></div>
                    <div className="col-md-5 h-100 eq-row mb-md-0 mb-3">
                        <CardWithBoxShadow className="h-100">
                            <img src={QmaticLogo} alt="Qmatic logo" style={{ maxWidth: '180px' }} />

                            <h6 className="font-weight-bold pt-4">QMATIC</h6>

                            <p className="text-muted pt-3 small">QMATIC is the global leader in customer journey management. We invented the concept in 1981 and have remained committed to innovating world-class technology solutions that create great experiences for customers, patients, citizens and the staff who serve them.</p>
                        </CardWithBoxShadow>
                    </div>

                    <div className="col-md-5 h-100 eq-row mb-md-0 mb-3">

                        <CardWithBoxShadow className="h-100">
                            <img src={VeryDayLogo} alt="veryday logo" style={{ maxWidth: '180px' }} />

                            <h6 className="font-weight-bold pt-4">VERYDAY</h6>

                            <p className="text-muted pt-3 small">Veryday is an international company providing Customer Experience services and solutions. Established in Sweden 45 years ago, Veryday has several offices operating in Dubai, Riyadh, New York and Shanghai.</p>
                        </CardWithBoxShadow>
                    </div>
                    <div className="col-md-1"></div>

                </Row>
            </Container>

            <PrimaryDemoBanner />
        </Layout>
    )
}

export default Partners
