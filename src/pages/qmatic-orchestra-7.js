import React from "react"
import Layout from "../components/layout"
import LightTitleBox from "../components/light-title-box"
import EltajImage from "../components/eltaj-image/eltaj-image"
import HeroImg from "../images/product-qmatic/orchestra-7-hero.png"
import QmaticLogo from "../images/qmatic-logo-2.svg"
import { Row, Container } from "react-bootstrap"
import AssetInfoBox from "../components/asset-info-box/asset-info-box"
import QmaticFeatures from "../data/qmatic-features"
import PrimaryDemoBanner from "../components/primary-demo-banner"
import CustomerFeedbackCapture from "../data/customer-feedback-capture"
import CardWithBoxShadow from "../components/card"
import InfoSection from "../components/info-section/info-section"
import BookingTabImg from "../images/online-appointment-booking/how-it-works-tab.png"
import EltajList from "../components/eltaj-list"
import FeatureBox from "../components/feature-box/feature-box"
import SeamlessIntegration from "../images/landing-page/seamless-integration.svg"
import BusinessDecision from "../data/business-decision"
import QmaticImage from "../images/product-qmatic/qmatic.png"
import BookDemoBtn from "../components/book-demo-btn"

const QmaticOrchestra7 = () => (
  <div>
    <Layout>
      {/* hero section */}
      <section className="pb-5">
        <div className="container py-5 my-5">
          <div className="row">
            <div className="col-md-6 my-auto pb-md-0 pb-5">
              <div className="row">
                <div className="col-md-10">
                  <h1 className="mb-4">Qmatic Enterprise Orchestra 7</h1>
                  <h6 className="text-muted">
                    A robust solution for queue management and customer journey
                    management
                  </h6>
                </div>
              </div>
              <BookDemoBtn/>

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
            <h4>Streamline your entire customer Journey</h4>
            <Row>
              <div className="col-md-9 mx-auto">
                <p className="text-muted mt-3">
                  In today’s business world, it’s expedient that you understand
                  your customer journey through your experience points.
                  Customers today choose their path, engage and interact with
                  different channels, shift preferences and take different
                  routes to reach their destination. The Enterprise Orchestra 7
                  enables you to monitor these paths, discover trends and create
                  a seamless experience for your customers to boost brand
                  loyalty and increase revenue.
                </p>
              </div>
            </Row>

            <Row className="py-5">
              <iframe
                src="https://www.youtube.com/embed/OwjzZwRS3xw"
                // title={videoTitle}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                frameBorder="0"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                allowFullScreen
                className="mx-auto"
                style={{ width: "800px", height: "400px" }}
              />
            </Row>

            <button className="btn btn-primary rounded-0 text-center px-4 mt-3">
              Learn more
            </button>
          </div>
        </Container>
      </section>

      {/*  */}
      <section className="pt-5 mt-5">
        <Container>
          <div className="text-center">
            <Row>
              <div className="col-md-10 mx-auto">
                <h4 className="text-capitalize">
                  CREATE A SEAMLESS COMMUNICATION AT EVERY TOUCHPOINT
                </h4>
              </div>
            </Row>
            <Row>
              <div className="col-md-9 mx-auto">
                <p className="text-muted mt-3">
                  How do you communicate with customers when they visit your
                  branches? The enterprise Orchestra 7 empowers you to
                  communicate with customers pre-arrival to post serving.
                </p>
              </div>
            </Row>

            <button className="btn btn-primary rounded-0 text-center px-4 mt-3">
              Learn more
            </button>
          </div>

          <Row className="mt-5">
            {QmaticFeatures.map((feature, index) => (
              <div className="col-lg-3">
                <div className="d-flex h-100">
                  <AssetInfoBox
                    title={feature.title}
                    subtitle={feature.subTitle}
                    image={feature.icon}
                  />
                </div>
              </div>
            ))}
          </Row>
        </Container>
      </section>

      {/*  */}
      <section className="pt-5 mt-5">
        <Container>
          <div className="text-center">
            <Row>
              <div className="col-md-10 mx-auto">
                <h4 className="text-capitalize">
                  DID WE MEET CUSTOMER EXPECTATION? CAPTURE THE FEEDBACK
                </h4>
              </div>
            </Row>
            <Row>
              <div className="col-md-9 mx-auto">
                <p className="text-muted mt-3">
                  With the Omni channel customer feedback, you give customers
                  multiple channels to tell you how they feel about your service
                  at each touch point and collect the data.
                </p>
              </div>
            </Row>
          </div>

          <Row className="mt-5">
            {CustomerFeedbackCapture.map((step, index) => (
              <div className="col-lg-4">
                <div className="d-flex h-100">
                  <CardWithBoxShadow>
                    <h1 className="text-primary">{step.index}</h1>

                    <h5 className="pt-3">{step.title}</h5>

                    <p className="text-muted pt-2">{step.subTitle}</p>
                  </CardWithBoxShadow>
                  {/* <AssetInfoBox title={step.title} subtitle={step.subTitle} image={step.icon} /> */}
                </div>
              </div>
            ))}
          </Row>
        </Container>
      </section>

      {/*  */}
      <section className="container my-5 pt-5">
        <InfoSection textFirst={true} image={BookingTabImg}>
          <h2 className="mb-4">EMPOWER EMPLOYEES TO WORK EFFICIENTLY</h2>

          <h6 className="text-muted">
            Part of creating customer experience is to enable your employees to
            work more efficiently. With the orchestra workstation terminal, your
            employees can have the best experience serving customers
          </h6>
          <div>
            <EltajList text="Counter Terminal" />
            <EltajList text="Reception Terminal" />
          </div>
        </InfoSection>
      </section>

      {/*  */}
      <section className="my-5 py-5">
        <Container>
          <FeatureBox
            image={SeamlessIntegration}
            title="Achieve seamless integration with other systems"
            textFirst={false}
            subtitle="The flexible orchestra 7 integrates seamlessly with other systems to help you achieve optimal business operation"
          ></FeatureBox>
        </Container>
      </section>

      {/*  */}
      <section>
        <Container>
          <div className="text-center">
            <Row>
              <div className="col-md-10 mx-auto">
                <h4 className="text-capitalize">
                  Make Informed decisions with business intelligence
                </h4>
              </div>
            </Row>
            <Row>
              <div className="col-md-9 mx-auto">
                <p className="text-muted mt-3">
                  The Qmatic orchestra Business Intelligence integration
                  optimizes your wholesome business data , providing you with
                  actionable insights at a glance.
                </p>
              </div>
            </Row>
          </div>
          <Row className="mt-5">
            {BusinessDecision.map((feature, index) => (
              <div className="col-lg-3">
                <div className="d-flex h-100">
                  <AssetInfoBox
                    title={feature.title}
                    subtitle={feature.subTitle}
                    image={feature.icon}
                  />
                </div>
              </div>
            ))}
          </Row>

          <div className="text-center mt-3">
            <button className="btn btn-primary rounded-0 text-center px-4 mt-4">
              Learn more
            </button>
          </div>
        </Container>
      </section>

      {/*  */}
      <section className="my-5 pt-5">
        <Container>
          <InfoSection textFirst={false} image={QmaticImage}>
            <h2 className="mb-4">MAIN BENEFIT OF QMATIC ORCHESTRA 7</h2>

            <div>
              <EltajList text="Improve customer experience" />
              <EltajList text="Strengthen customer relationship" />
              <EltajList text="Promote customer retention" />
              <EltajList text="Improve quality of product and service" />
              <EltajList text="Insightful business decisions" />
              <EltajList text="Improve data profitability" />
              <EltajList text="Improve employee productivity." />
              <EltajList text="Sager customer journey" />
              <EltajList text="Easy development and deployment of services" />
            </div>
          </InfoSection>
        </Container>
      </section>
      {/* Primary Demo Banner */}
      <PrimaryDemoBanner />
    </Layout>
  </div>
)

export default QmaticOrchestra7
