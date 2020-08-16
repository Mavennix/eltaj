import React from 'react'
import PrimaryDemoBanner from '../components/primary-demo-banner'
import QmaticLogo from '../images/qmatic-logo-2.svg'
import HeroImg from "../images/product-qmatic/digital-signage.png"
import EltajImage from '../components/eltaj-image/eltaj-image'
import EltajList from '../components/eltaj-list'
import { Row, Container } from 'react-bootstrap'
import InfoSection from '../components/info-section/info-section'
import Layout from '../components/layout'
import QmaticCloudFeatures from '../data/qmatic-cloud-feature'
import SelfKioskFeatures from '../data/self-kiosk-features'
import DigitalSignageFeatures from '../data/digital-signage-features'

const digitalSignage = () => (
    <div>
        <Layout>
            {/* hero section */}
            <section className="pb-5">
                <div className="container py-5 my-5">
                    <div className="row">
                        <div className="col-md-6 my-auto pb-md-0 pb-5">
                            <div className="row">
                                <div className="col-md-10">
                                    <h1 className="mb-4">
                                    DIGITAL SIGNAGE
                    </h1>
                                    <h6 className="text-muted">
                                    Display content with context
                    </h6>
                                </div>
                            </div>
                            <button className="btn btn-primary rounded-0 text-center px-4 mt-5">
                                Book a free demo
                </button>

                            <h6 className="text-muted pt-3">Powered by</h6>
                            <img src={QmaticLogo} />
                        </div>

                        <div className="col-md-6">
                            <EltajImage image={HeroImg} isImageRight={true} />
                        </div>
                    </div>
                </div>
            </section>

            {/*  */}
            <section>
                <Container>
                    <div className="text-center">
                        <Row>
                            <div className="col-md-10 mx-auto">
                                <h4 className="text-capitalize">Personalise customers’ experience with the right content.</h4>
                            </div>
                        </Row>
                        <Row>
                            <div className="col-md-9 mx-auto">
                                <p className="text-muted mt-3">Every minute a customer spends interacting with your business is an opportunity to keep them delighted. Inform, educate and engage them with the right content to keep them coming back for more .</p>

                                <p className="text-muted mt-3">The Eltaj digital solution allows you to inform customers of queue status, educate them with valuable content and promote your products and services.</p>
                            </div>
                        </Row>
                    </div>
                </Container>
            </section>


            {/*  */}
            <section className="my-5 pt-5">
                <Container>
                    {DigitalSignageFeatures.map((solo, index) => (
                        <InfoSection textFirst={index % 2 === 0 ? true : false} image="">
                            <h2 className="mb-4">
                                {solo.title}
                            </h2>


                            <div className="mb-5">
                                {solo.features.map((feature, index) => (
                                    <EltajList text={feature} />
                                ))}
                            </div>
                        </InfoSection>
                    ))}

                </Container>
            </section>

            {/* Primary Demo Banner */}
            <PrimaryDemoBanner />
        </Layout>
    </div>
)

export default digitalSignage
