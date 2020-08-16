import React from 'react'
import Layout from '../components/layout'
import LightTitleBox from '../components/light-title-box'
import EltajImage from '../components/eltaj-image/eltaj-image'

// image import
import HeroImg from '../images/business-intelligence/hero-img.png'
import AboutImage from '../images/business-intelligence/about-img.png'
import PrioritizeImg from '../images/business-intelligence/prioritize-img.png'
import MonitorPerformanceImg from '../images/queue-management/about-image.jpg'
import BusinessAnalysisImg from '../images/business-intelligence/business-analysis.png'
import SmartBusinessImg from '../images/business-intelligence/smart-business.png'

import EltajList from '../components/eltaj-list'
import InfoSection from '../components/info-section/info-section'
import PrimaryDemoBanner from '../components/primary-demo-banner'
import PrimaryTwoColumnBanner from '../components/Primary-two-column-banner'



const BusinessIntelligence = () => (
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
                                        <LightTitleBox text="BUSINESS INTELLIGENCE" />
                                    </div>
                                    <h1 className="mb-4">
                                        Optimizing data to drive business growth.
                    </h1>
                                    <h6 className="text-muted">
                                        Make Informed decisions with business intelligence.
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


            {/* About Section */}
            <section className="container">
                <InfoSection textFirst={false} image={AboutImage}>
                    <h6 className="text-muted mb-3">
                        Time is a precious resource in driving business growth.
                        With real-time insights on customer behaviour,
                        you can make timely, and accurate decisions to improve profitability
                        and differentiate your business in the marketplace.
            </h6>
                    <h6 className="text-muted mb-3">
                        {" "}
                        The Qmatic orchestra Business Intelligence integration optimizes your wholesome business data,
                        providing you with actionable insights at a glance. With the interactive dashboard,
                        analytics report and statistics, you can monitor your operations and forecast trends
                        to provide a seamless experience for your customers.
            </h6>
                </InfoSection>
            </section>

            {/* why prioritize */}
            <section className="container my-5 pt-5">
                <InfoSection textFirst={true} image={PrioritizeImg}>
                    <h2 className="mb-5">WHY YOU SHOULD PRIORITIZE BUSINESS INTELLIGENCE?</h2>
                    <div>
                        <EltajList text="122% - 5 years average Return-on-investment of Business Intelligence" />
                        <EltajList text="89% - Business leaders believe that big data will revolutionize business operations, just like the Internet did." />
                        <EltajList text="91%- Global companies increasing investment in big data." />
                    </div>
                </InfoSection>
            </section>

            <PrimaryTwoColumnBanner headerPosition="left" buttonPosition="left" header="Start your Business intelligence journey today" buttonText="Book a free consultation now" />

            {/* monitor business performance */}
            <section className="container my-5 pt-5">
                <InfoSection textFirst={false} image={MonitorPerformanceImg}>
                    <h2 className="mb-4">Monitor your overall business performance at a glance, In real-time</h2>
                    <h6 className="text-muted mb-3">
                    With the Qmatic Bi solution in action, you can monitor your overall business performance at a glance. Just view, zoom and slide over your mobile devices and desktop. You wouldn’t miss a bit of it and every correction action you take will be accurate and timely.
            </h6>
                    <div className="pt-3">
                        <EltajList text="Monitor your business performance on a customizable dashboard: From the counter, customer bookings, employees, transaction, you are in total control of your business interactions." />
                        <EltajList text="Gain total visibility into business performance in all branches with KPIs, and specific healthcare metrics." />
                        <EltajList text="Attend technical issues as they arise." />
                    </div>
                </InfoSection>
            </section>

            {/* business analysis */}
            <section className="container my-5 pt-5">
                <InfoSection textFirst={true} image={BusinessAnalysisImg}>
                    <h2 className="mb-4">Analyse your business performance with report and analytics</h2>
                    <h6 className="text-muted mb-3">
                    The Qmatic BI tool presents meaning reports and statistics on your business performance across, zones, branches, departments. With its intuitive and logical interface, you can measure your business performance and make well-informed decisions. The tool empowers you:
            </h6>
                    <div className="pt-3">
                        <EltajList text="Measure the efficiency of your branches with drag-and-drop data fields and point-and-click analytics." />
                        <EltajList text="Gain total visibility into business performance in all branches with KPIs, and specific healthcare metrics." />
                        <EltajList text="Empower your employees to make informed decisions at real-time with the web-based mobile business analytic." />
                    </div>
                </InfoSection>
            </section>


            {/*  */}
            <section className="container my-5 pt-5">
                <InfoSection textFirst={false} image={MonitorPerformanceImg}>
                    <h2 className="mb-4">Leverage on customer data to shape your business strategies and impact profitability</h2>
                    <h6 className="text-muted mb-3">
                        Leverage on the data mined from your business activities. With customer data you can predict the projection of business, predict future revenue and projection of your market. The orchestra enables you to:
            </h6>
                    <div className="pt-3">
                        <EltajList text="Forecast your customer acquisition growth rate." />
                        <EltajList text="Predict market projections by estimating trends in customer behaviour." />
                        <EltajList text="Predict customer traffic in your branches." />
                    </div>
                </InfoSection>
            </section>

            {/*  */}
            <section className="container my-5 pt-5">
                <InfoSection textFirst={true} image={SmartBusinessImg}>
                    <h2 className="mb-4">MAIN BENEFITS OF THE SMART BUSINESS INTELLIGENCE</h2>
                    <div className="pt-3">
                        <EltajList text="Insightful business decisions" />
                        <EltajList text="Flexible" />
                        <EltajList text="Improve data profitability" />
                        <EltajList text="Improve customer journey customer service" />
                        <EltajList text="Promote customer retention" />
                        <EltajList text="Optimize customer journey" />
                        <EltajList text="Efficient marketing campaigns" />
                    </div>
                </InfoSection>
            </section>

            <PrimaryDemoBanner />
        </Layout>
    </div>
)

export default BusinessIntelligence