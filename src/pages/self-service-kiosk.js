import React from 'react'
import PrimaryDemoBanner from '../components/primary-demo-banner'
import QmaticLogo from '../images/qmatic-logo-2.svg'
import HeroImg from "../images/product-qmatic/kiosk.png"
import EltajImage from '../components/eltaj-image/eltaj-image'
import EltajList from '../components/eltaj-list'
import { Row, Container } from 'react-bootstrap'
import InfoSection from '../components/info-section/info-section'
import Layout from '../components/layout'
import QmaticCloudFeatures from '../data/qmatic-cloud-feature'
import SelfKioskFeatures from '../data/self-kiosk-features'

const SelfServiceKiosk = () => (
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
                                        SELF SERVICE KIOSK
                    </h1>
                                    <h6 className="text-muted">
                                        Quality customer service: However and whenever they want it.
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
                                <h4 className="text-capitalize">When customers control how they interact with your business, you can do no wrong serving them.</h4>
                            </div>
                        </Row>
                        <Row>
                            <div className="col-md-9 mx-auto">
                                <p className="text-muted mt-3">You would agree that we all love to get the best service, anytime and wherever we want it. With evolving technology, customers can get the service they want with utmost convenience. With ELTAJ’s digital kiosks installed in your branches, customers can access your services without having to interact with your staff, reducing congestion and, in turn, increasing staff efficiency.</p>
                            </div>
                        </Row>
                    </div>
                </Container>
            </section>


            {/*  */}
            <section className="my-5 pt-5">
                <Container>
                    {SelfKioskFeatures.map((solo, index) => (
                        <InfoSection textFirst={index % 2 === 0 ? true : false} image={solo.image}>
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

export default SelfServiceKiosk
