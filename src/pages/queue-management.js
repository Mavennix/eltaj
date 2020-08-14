import React from "react"
import Layout from "../components/layout"
import HeroImg from "../images/queue-management/queue-management-hero.jpg"
import AboutImage from "../images/queue-management/about-image.jpg"
import QMSBenefitImage from "../images/queue-management/qms-benefit.jpg"
import BusinessActionImage from "../images/queue-management/business-action.jpg"
import EltajImage from "../components/eltaj-image/eltaj-image"
import LightTitleBox from "../components/light-title-box"
import InfoSection from "../components/info-section/info-section"
import SecondaryDemoBanner from "../components/secondary-demo-banner"
import AssetInfoBox from "../components/asset-info-box/asset-info-box"
import virtualQueueing from "../data/virtual-queueing"
import PrimaryDemoBanner from "../components/primary-demo-banner"
import EltajList from "../components/eltaj-list"

const queueManagement = () => {
  return (
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
                      <LightTitleBox text="QUEUE MANAGEMENT SYSTEM" />
                    </div>
                    <h1 className="mb-4">
                      Reduce Queue Time By Optimizing Customer Journey
                    </h1>
                    <h6 className="text-muted">
                      Customers say queue time is annoying, time-wasting and
                      suffocating. The queue management system changes that.
                    </h6>
                  </div>
                </div>
                <button className="btn btn-primary rounded-0 text-center px-4 mt-5">
                  Book a free demo
                </button>
              </div>

              <div className="col-md-6">
                <EltajImage image={HeroImg} isImageRight={true} />
                {/* <img src={HeroImg} alt="Hero" className="img-fluid" /> */}
              </div>
            </div>
          </div>
        </section>
        {/* About Section */}
        <section className="container">
          <InfoSection textFirst={false} image={AboutImage}>
            <h6 className="text-muted mb-3">
              As an enterprise, you want your customers to be happy with your
              services. You know, to promote brand loyalty and in turn improve
              sales and boost your revenue.
            </h6>
            <h6 className="text-muted mb-3">
              {" "}
              With the Qmatic Solo, you can manage customer flow, streamline
              their customer journey and maintain social distancing rules while
              at it. And, obeying Government directives on COVID-19 while
              contributing your quota in flattening the curve.
            </h6>
            <div>
              <EltajList text="74%- Customer go to competitors to avoid long queue" />
              <EltajList text="59% - customer do not wait more than 4 minutes on a queue" />
              <EltajList text="87% - customers that are willing to use queue technology to experience short queue time" />
            </div>
          </InfoSection>
        </section>

        <SecondaryDemoBanner />

        <section className="container text-center my-5">
          <div className="my-3">
            <LightTitleBox text="VIRTUAL QUEUING" />
          </div>
          <div className="row my-3">
            <div className="col-lg-8 mx-auto">
              <h2>
                Reduce customers’ waiting time in your branches by empowering
                them to schedule appointments virtually.
              </h2>
            </div>
          </div>

          <div className="row my-5 py-5">
            {virtualQueueing.map((queue, index) => (
              <div className="col-lg-4">
                <div className="d-flex h-100">
                  <AssetInfoBox title={queue.title} subtitle={queue.subtitle} />
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Business Action */}
        <section className="container my-5">
          <InfoSection textFirst={false} image={BusinessActionImage}>
            <div className="mb-3">
              <LightTitleBox text="BUSINESS ACTION" />
            </div>
            <h2 className="mb-4">
              Engage customers with the right content while they wait to be
              served
            </h2>
            <h6 className="text-muted mb-3">
              Every minute a customer spends interacting with your business is
              an opportunity to keep them delighted and make them come back for
              more. This is where the digital signage solution comes in.
            </h6>
            <div>
              <EltajList text="Inform customers on their real-time queue status." />
              <EltajList text="Upsell your product and services by displaying targeted-ads to the right demographics on a queue" />
              <EltajList text="Reduce actual and perceived wait time by engaging visitors with valuable content." />
            </div>
          </InfoSection>
        </section>

        {/* Business Inteligence */}
        <section className="container my-5">
          <InfoSection textFirst={true} image={AboutImage}>
            <div className="mb-3">
              <LightTitleBox text="BUSINESS INTELLIGENCE" />
            </div>
            <h2 className="mb-4">
              Gain actionable insights on customers behaviour in all your
              branches
            </h2>
            <h6 className="text-muted mb-3">
              Transform your branches into smart branches to monitor and manage
              customer behaviour when they wait to earn your service. With
              Eltaj’s Business intelligence tool, you get real-time data on your
              service, wait time and customer behaviour.
            </h6>
            <div>
              <EltajList text="Track number of customers, average wait time and average service time to improve queue experience." />
              <EltajList text="Monitor and update the content on your digital signage." />
              <EltajList text="Immediately assign employees when a new queue emerges." />
              <EltajList text="Monitor, analyse and optimize service." />
              <EltajList text="Track branch, employee and service performance remotely." />
            </div>
          </InfoSection>
        </section>

        {/* Main Benefit */}
        <section className="container my-5">
          <InfoSection textFirst={false} image={QMSBenefitImage}>
            <h2 className="mb-4">
              Main Benefit Of Smart Queue Management System
            </h2>
            <div>
              <EltajList text="Reduce customer wait time" />
              <EltajList text="Promote social distancing" />
              <EltajList text="Make customers happy with your service" />
              <EltajList text="Empower your employees to work more efficiently" />
              <EltajList text="Boost your revenue with cross-selling" />
              <EltajList text="Create a seamless customer journey." />
              <EltajList text="Take control of branches remotely in real-time." />
            </div>
          </InfoSection>
        </section>
        <PrimaryDemoBanner />
      </Layout>
    </div>
  )
}

export default queueManagement
