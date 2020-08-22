import React from "react"
import Layout from "../components/layout"
import HeroImg from "../images/customer-feedback/hero.png"
import AboutImage from "../images/customer-feedback/about-customer-feedback.png"
import QMSBenefitImage from "../images/customer-feedback/benefit-customer-feedback.png"
import BusinessActionImage from "../images/customer-feedback/customer-feedback.png"
import VoiceOfCustomerImg from '../images/customer-feedback/voice-of-customer.png'
import EltajImage from "../components/eltaj-image/eltaj-image"
import LightTitleBox from "../components/light-title-box"
import InfoSection from "../components/info-section/info-section"
import SecondaryDemoBanner from "../components/secondary-demo-banner"
import AssetInfoBox from "../components/asset-info-box/asset-info-box"
import virtualQueueing from "../data/virtual-queueing"
import PrimaryDemoBanner from "../components/primary-demo-banner"
import EltajList from "../components/eltaj-list"
import { Link } from "gatsby"
import BookDemoBtn from "../components/book-demo-btn"

const customerFeedback = () => {
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
                      <LightTitleBox text="CUSTOMER FEEDBACK" />
                    </div>
                    <h1 className="mb-4">
                      Use Customer Feedback To Improve Your Service
                    </h1>
                    <h6 className="text-muted">
                      Customers are an integral part of your business growth.
                      What do they have to say about you?
                    </h6>
                  </div>
                </div>
                <BookDemoBtn/>
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
              You would agree that customers’ words can greatly influence how
              your business is perceived in the market. Words spread like
              wildfire. And, the word they speak of your brand depends on how
              satisfied they are with your service.
            </h6>
            <h6 className="text-muted mb-3">
              {" "}
              Customer feedback gives you great insight into what your customers have to say about your services. Which helps  you improve your service, thereby,  increasing customer loyalty and driving revenue.
            </h6>
          </InfoSection>
        </section>

        {/*  */}
        <section className="container my-5">
          <InfoSection textFirst={true} image={BusinessActionImage}>
            <h2 className="mb-4">Smart Customer Feedback Channel</h2>
            <h6 className="text-muted mb-3">
              With the Omnichannel customer feedback system, you give customers
              multiple channels to tell you how they feel about your service at
              each touchpoint. Customers express themselves with emotions, and
              you receive data on their transaction and wait time.
            </h6>
            <div>
              <EltajList text="NPS" />
              <EltajList text="Smileys" />
              <EltajList text="Touch screen display" />
              <EltajList text="Self-service kiosk" />
            </div>
          </InfoSection>
        </section>

        {/*  */}
        <section className="container my-5">
          <InfoSection textFirst={false} image={VoiceOfCustomerImg}>
            <h2 className="mb-4">Acting On Voice Of Customer (VOC)</h2>
            <h6 className="text-muted mb-3">
            Acting on voice of customer (voc): With  VOC programs,  you  gather customer feedback data from surveys, analyze the data to
understand what the feedback says about your business,  learn how it affects each touchpoint in the customer journey, and drive new ideas to optimize the customer experience.
            </h6>
            <div>
              <EltajList text="Collect customer feedback and organise the data." />
              <EltajList text="Analyze customer journey management data to pinpoint the most important business metrics and trends.e." />
              <EltajList text="Predict market projections by estimating trends in customer behaviour." />
            </div>
          </InfoSection>
        </section>

        {/* Main Benefit */}
        <section className="container my-5">
          <InfoSection textFirst={true} image={QMSBenefitImage}>
            <h2 className="mb-4">
              Main Benefits Of The Smart Customer Feedback
            </h2>
            <div>
              <EltajList text="Improve the quality of product and service" />
              <EltajList text="Increase brand loyalty" />
              <EltajList text="Reap the benefit of word-of-mouth" />
              <EltajList text="Improve customer experience" />
              <EltajList text="Make informed decisions" />
            </div>
          </InfoSection>
        </section>
        <PrimaryDemoBanner />
      </Layout>
    </div>
  )
}

export default customerFeedback
