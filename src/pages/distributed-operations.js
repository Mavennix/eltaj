import React from "react"
import Layout from "../components/layout"
import HeroImg from "../images/queue-management/queue-management-hero.jpg"
import AboutImage from "../images/queue-management/about-image.jpg"
import QMSBenefitImage from "../images/queue-management/qms-benefit.jpg"
import BusinessActionImage from "../images/queue-management/business-action.jpg"
import EltajImage from "../components/eltaj-image/eltaj-image"
import LightTitleBox from "../components/light-title-box"
import InfoSection from "../components/info-section/info-section"
import PrimaryDemoBanner from "../components/primary-demo-banner"
import EltajList from "../components/eltaj-list"

const distributedOperations = () => {
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
                      <LightTitleBox text="DISTRIBUTED OPERATIONS" />
                    </div>
                    <h1 className="mb-4">Centralized enterprise operations</h1>
                    <h6 className="text-muted">
                      Manage your enterprise operations from a centralised
                      location
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
              An enterprise’s business operation is a complex web of activities.
              And, it’s a slippery slope into a ditch of horror if these
              activities are not controlled and managed properly.
            </h6>
            <h6 className="text-muted mb-3">
              With Eltaj’s distributed operation solution, you can manage your
              business operations from a centralised system and create a
              seamless customer journey across all branches.
            </h6>
          </InfoSection>
        </section>

        {/*  */}
        <section className="container my-5">
          <InfoSection textFirst={true} image={BusinessActionImage}>
            <h2 className="mb-4">
              Install a customizable hub in all locations to a central server
            </h2>
            <h6 className="text-muted mb-3">
              Visualise a clustered web of Qmatic components (Orchestra server,
              Business intelligence) that allows you to seamlessly control and
              manage a network of branches and ease the workflow with or without
              high network bandwidth. 
            </h6>
            <h6 className="text-muted mb-3">
            That how the Qmatic hub works:
            </h6>
            <div>
              <EltajList text="It’s a cloud based software or hardware component that can be installed on-premise in your locations." />
              <EltajList text="It’s connected to a central server somewhere in your head office." />
              <EltajList text="It Integrates with enterprise orchestra 7, intro 17 self service kiosk to create a digital ecosystem." />
              <EltajList text="The hub collects data from all locations." />
            </div>
          </InfoSection>
        </section>



        {/* Main Benefit */}
        <section className="container my-5">
          <InfoSection textFirst={false} image={QMSBenefitImage}>
            <h2 className="mb-4">Main Benefits of Distributed Operations</h2>
            <div>
              <EltajList text="Manage enterprise workflow from centralised location." />
              <EltajList text="Create a consistent customer experience." />
              <EltajList text="Gain actionable insights from location data." />
              <EltajList text="Achieve Seamless integration with other systems." />
              <EltajList text="Design a cost effective system infrastructure." />
            </div>
          </InfoSection>
        </section>
        <PrimaryDemoBanner />
      </Layout>
    </div>
  )
}

export default distributedOperations
