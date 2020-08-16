import React from 'react'
import PrimaryDemoBanner from '../components/primary-demo-banner'
import QmaticLogo from '../images/qmatic-logo-2.svg'
import HeroImg from "../images/product-qmatic/qmatic-cloud-hero.png"
import EltajImage from '../components/eltaj-image/eltaj-image'
import EltajList from '../components/eltaj-list'
import { Row, Container } from 'react-bootstrap'
import InfoSection from '../components/info-section/info-section'
import Layout from '../components/layout'
import QmaticCloudFeatures from '../data/qmatic-cloud-feature'

const QmaticCloudSolution = () => (
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
                                        Qmatic SOLO
                    </h1>
                                    <h6 className="text-muted">
                                        The All In One Customer Journey Platform
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
                                <h4 className="text-capitalize">Create a seamless enterprise customer journey from the cloud</h4>
                            </div>
                        </Row>
                        <Row>
                            <div className="col-md-9 mx-auto">
                                <p className="text-muted mt-3">Thousands of businesses and enterprises in different industries are resulting in cloud-based softwares to deploy databases and manage workflow . With Eltaj’s cloud solutions your enterprise can create a seamless digital customer journey and manage business operations from the cloud with no installation or expertise required.</p>
                            </div>
                        </Row>
                    </div>

                    <Row className="pt-4">
                        <div className="col-md-4">
                            <EltajList text="77% - Enterprises that have at least one application in the cloud" />
                        </div>
                        <div className="col-md-4">
                        <EltajList text="60%- Organisations that use cloud to store data." />
                        </div>
                        <div className="col-md-4">
                        <EltajList text="74%- CFOs that say cloud technology had a groundbreaking impact on their business." />
                        </div>
                    </Row>
                </Container>
            </section>


            {/*  */}
            <section className="my-5 pt-5">
                <Container>
                    {QmaticCloudFeatures.map((solo, index) => (
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

export default QmaticCloudSolution
