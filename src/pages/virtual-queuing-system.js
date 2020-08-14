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

const virtualQueuingSystem = () => {
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
                      <LightTitleBox text="VIRTUAL QUEUING SYSTEM" />
                    </div>
                    <h1 className="mb-4">Implement a remote queuing system</h1>
                    <h6 className="text-muted">
                      How to solve for queue frustration? Just allow your
                      customers queue with their mobile devices.
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
              Nobody likes to stand long hours waiting in line to receive a
              service. It is a valid problem that makes businesses lose
              customers to competitors. With the world going virtual, queues can
              also go virtual. With Eltaj’s virtual queuing system, customers
              schedule appointments online, wait in line remotely and receive
              quality service with little or no hassle.
            </h6>
          </InfoSection>
        </section>

        {/*  */}
        <section className="container my-5">
          <InfoSection textFirst={true} image={BusinessActionImage}>
            <h2 className="mb-4">
              Customers complete queuing processes on their devices
            </h2>
            <div>
              <EltajList text="Mobile Ticketing - customer scan QR codes to get virtual tickets, queue remotely and receive a real-time update on their position on the queue." />
              <EltajList text="Online appointment booking- Customers can schedule an appointment online before or after walking into your premises." />
              <EltajList text="Check-in and serving apps - Staff can get out from behind a counter and onto the service floor to serve visitors directly." />
              <EltajList text="Email and sms- Inform customers on their real-time queue status." />
            </div>
          </InfoSection>
        </section>

        {/*  */}
        <section className="container my-5">
          <InfoSection textFirst={false} image={AboutImage}>
            <h2 className="mb-4">
              Gain actionable insights into customers’ behaviour
            </h2>
            <h6 className="text-muted mb-3">
              Transform your branches into smart branches to monitor and manage
              customer behaviour while they wait to earn your service. With
              Eltaj’s Business intelligence tool, you get real-time data on your
              service, customer wait time and customer behaviour.
            </h6>
            <div>
              <EltajList text="Track number of customers, average wait time and average service time to improve queue experience." />
              <EltajList text="Collect customer feedback to know how satisfied they are with your service." />
              <EltajList text="Monitor and analyse data to optimize service." />
              <EltajList text="Monitor VOC to gain customer perception" />
            </div>
          </InfoSection>
        </section>

        {/* Main Benefit */}
        <section className="container my-5">
          <InfoSection textFirst={true} image={QMSBenefitImage}>
            <h2 className="mb-4">Main Benefits of Virtual Queuing System</h2>
            <div>
              <EltajList text="Reduce wait time." />
              <EltajList text="Improve customer experience" />
              <EltajList text="Increase staff efficiency and productivity" />
              <EltajList text="Empower your employees to work more efficiently" />
              <EltajList text="Boost your revenue with cross-selling and upselling." />
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

export default virtualQueuingSystem
