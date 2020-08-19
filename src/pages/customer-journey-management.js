import React from "react"
import Layout from "../components/layout"
import EltajList from "../components/eltaj-list"
import InfoSection from "../components/info-section/info-section"
import LightTitleBox from "../components/light-title-box"
import PrimaryDemoBanner from "../components/primary-demo-banner"


import HeroImg from "../images/customer-journey-management/hero.png"
import AboutImage from "../images/customer-journey-management/customer-journey.png"
import QMSBenefitImage from "../images/queue-management/qms-benefit.jpg"
import BusinessActionImage from "../images/customer-journey-management/customer-touch-point.png"
import CustomerInteration from "../images/customer-journey-management/customer-interaction.png"
import OptimizeExperienceImg  from '../images/customer-journey-management/optimize-experience.png'
import BenfitCustomerExperience from '../images/customer-journey-management/benefit-customer-journey.png'
import EltajImage from "../components/eltaj-image/eltaj-image"

const customerJourneyManagement = () => {
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
                      <LightTitleBox text="CUSTOMER JOURNEY MANAGEMENT" />
                    </div>
                    <h1 className="mb-4">
                      Customer Touch Points In Its Entirety
                    </h1>
                    <h6 className="text-muted">
                      Improve customer experience with your brand across all
                      touchpoints
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
              In today’s business world, it’s expedient that you understand the
              customer journey through your experience points. Customers today
              choose their path, engage and interact with different channels,
              shift preferences and take different routes to reach their
              destination.
            </h6>
            <h6 className="text-muted mb-3">
              {" "}
              Customer journey management enables you to monitor these paths,
              discover trends and create a seamless experience for your
              customers, thereby, boosting brand loyalty and increasing revenue.
            </h6>
          </InfoSection>
        </section>

        {/* Business Action */}
        <section className="container my-5">
          <InfoSection textFirst={true} image={BusinessActionImage}>
            <h2 className="mb-4">
              Identify customer touchpoints. Answer the “who?”, “where?” and
              “how?”
            </h2>
            <h6 className="text-muted mb-3">
              With ELTAJ’s customer journey management solution, you can
              Identify how each customer segment interacts with your business,
              the channels with which they interact with your personnels and
              their behaviour during the interactions. The customer management
              software will enable you to:
            </h6>
            <div>
              <EltajList text="See how customer switch between devices (mobile, desktop)" />
              <EltajList text="Modify channel preference to monitor customer channel behaviour for each customer segment." />
              <EltajList text="Use surveys and forms to collect data on customers' interaction with employees." />
            </div>
          </InfoSection>
        </section>

        {/* Business Inteligence */}
        <section className="container my-5">
          <InfoSection textFirst={false} image={CustomerInteration}>
            <h2 className="mb-4">
            Measure the customer data from their interactions and process thousands of events at real-time to see how the interaction will affect the end-to-end journey. With Eltaj system, you...
            </h2>
            <h6 className="text-muted mb-3">
              Measure the customer data from their interactions, process
              hundreds of thousands of events at real-time to see how the
              interaction will affect the end-to-end journey. With ELTAJ’s system,
              we
            </h6>
            <div>
              <EltajList text="Measure footfall and transaction data" />
              <EltajList text="Analyse customer activity and interaction" />
              <EltajList text="Monitor-end-to-end customer transaction" />
              <EltajList text="Monitor, analyse and optimize service." />
              <EltajList text="Monitor VOC to gain customer perception" />
            </div>
          </InfoSection>
        </section>

        {/* */}
        <section className="container my-5">
          <InfoSection textFirst={true} image={OptimizeExperienceImg}>
            <h2 className="mb-4">
              Make the most use of processed data to optimize the customer
              experience.
            </h2>
            <h6 className="text-muted mb-3">
              With insights on the customer journey, you can optimize for each
              touchpoint to improve customer satisfaction and boost revenue.
              With our consultation service, we identify
            </h6>
            <div>
              <EltajList text="Opportunities to improve customer experience, making recommendations and, standing on hand to implement whenever required." />
              <EltajList text="Provide pilots to test out our recommendations in real-time in order to lead up to full implementation." />
            </div>
          </InfoSection>
        </section>
        {/*  */}
        <section className="container my-5">
          <InfoSection textFirst={false} image={BenfitCustomerExperience}>
            <h2 className="mb-4">
              Main benefit of customer journey management
            </h2>
            <div>
              <EltajList text="Identifying holes and filling them with a seamless experience" />
              <EltajList text="Improve customer experience" />
              <EltajList text="Strengthen customer relationship" />
              <EltajList text="Promote customer retention" />
              <EltajList text="Drive overall business growth" />
            </div>
          </InfoSection>
        </section>
        <PrimaryDemoBanner />
      </Layout>
    </div>
  )
}

export default customerJourneyManagement
