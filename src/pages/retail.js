import React from 'react'
import PrimaryDemoBanner from '../components/primary-demo-banner'
import HeroImg from "../images/industries/retail.png"
import EltajImage from '../components/eltaj-image/eltaj-image'
import EltajList from '../components/eltaj-list'
import { Row, Container } from 'react-bootstrap'
import InfoSection from '../components/info-section/info-section'
import Layout from '../components/layout'
import FinanceData from '../data/finance-data'
import LightTitleBox from '../components/light-title-box'
import RetailData from '../data/retail-data'

const Retail = () => (
    <div>
        <Layout>
            {/* hero section */}
            <section className="pb-5">
                <div className="container py-5 my-5">
                    <div className="row">
                        <div className="col-md-6 my-auto pb-md-0 pb-5">
                            <div className="row">
                                <div className="col-md-10">
                                    <div className="mb-3">
                                        <LightTitleBox text="Retail" />
                                    </div>
                                    <h1 className="mb-4">
                                    Smart digital transformation for Traditional retail
                    </h1>
                                    <h6 className="text-muted">
                                    A duel between your traditional retail market and an ecommerce website. How do you win?
                    </h6>
                                </div>
                            </div>
                            <button className="btn btn-primary rounded-0 text-center px-4 mt-5">
                                Book a free demo
                </button>

                        </div>

                        <div className="col-md-6">
                            <EltajImage image={HeroImg} isImageRight={true} />
                        </div>
                    </div>
                </div>
            </section>



            {/*  */}
            <section className="my-5 pt-5">
                <Container>
                    {RetailData.map((solo, index) => (
                        <InfoSection textFirst={index % 2 === 0 ? false : true} image={solo.image}>
                            <h2 className="mb-4">
                                {solo.title}
                            </h2>

                            <h6 className="text-muted">{solo.subTitle}</h6>

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

export default Retail
