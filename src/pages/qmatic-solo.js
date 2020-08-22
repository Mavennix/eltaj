import React from "react"
import Layout from "../components/layout"
import HeroImg from "../images/product-qmatic/solo.png"
import EltajImage from "../components/eltaj-image/eltaj-image"
import QmaticLogo from "../images/qmatic-logo-2.svg"
import { Row, Container } from "react-bootstrap"
import PrimaryDemoBanner from "../components/primary-demo-banner"
import QmaticSoloFeatures from "../data/qmatic-solo-features"
import EltajList from "../components/eltaj-list"
import InfoSection from "../components/info-section/info-section"
import BookDemoBtn from "../components/book-demo-btn"

const QmaticSolo = () => (
  <div>
    <Layout>
      {/* hero section */}
      <section className="pb-5">
        <div className="container py-5 my-5">
          <div className="row">
            <div className="col-md-6 my-auto pb-md-0 pb-5">
              <div className="row">
                <div className="col-md-10">
                  <h1 className="mb-4">Qmatic SOLO</h1>
                  <h6 className="text-muted">
                    The All In One Customer Journey Platform
                  </h6>
                </div>
              </div>
              <BookDemoBtn/>

              <h6 className="text-muted pt-3">Powered by</h6>
              <img src={QmaticLogo} alt="Qmatic logo" />
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
                <h4 className="text-capitalize">
                  Reduce customer wait time with the powerful queue management
                  platform
                </h4>
              </div>
            </Row>
            <Row>
              <div className="col-md-9 mx-auto">
                <p className="text-muted mt-3">
                  The single location Solo platform, when deployed on-premise
                  allows you to manage customer flow on queue, streamline their
                  customer journey and maintain social distancing rules while at
                  it.
                </p>
              </div>
            </Row>
          </div>
        </Container>
      </section>

      {/*  */}
      <section className="my-5 pt-5">
        <Container>
          {QmaticSoloFeatures.map((solo, index) => (
            <InfoSection
              textFirst={index % 2 === 0 ? true : false}
              image={solo.image}
            >
              <h2 className="mb-4">{solo.title}</h2>

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

export default QmaticSolo
