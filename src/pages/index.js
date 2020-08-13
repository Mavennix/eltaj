import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import InfoBox from "../components/info-box/info-box"
import transformationSteps from "../data/transfromationsSeps"
import leanMoreOptions from "../data/learnMoreOptions"
import CovidBanner from "../components/covid-banner"
import features from "../data/features"
import FeatureBox from "../components/feature-box/feature-box"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <div className="px-lg-5 text-center my-5">
            <h3>The Enterprise Digital Transformation</h3>
            <h6 className="text-muted">
              With Eltaj digital solutions, you create a seamless customer
              experience at each point of the customer journey.
            </h6>
          </div>
          <div className="row">
            {transformationSteps.map((step, index) => (
              <div className="col-lg-6 mb-5">
                <div className="d-flex h-100">
                  <InfoBox
                    caption={step.caption}
                    icon={step.icon}
                    title={step.title}
                    subtitle={step.subtitle}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center">
        <button className="btn btn-primary rounded-0 text-center px-4">
          Book a free demo
        </button>
      </div>
    </div>
    <div className="container my-5 pb-4">
      {features.map((feature, index) => (
        <FeatureBox
          image={feature.image}
          title={feature.title}
          textFirst={index % 2 === 0 ? false : true}
          subtitle={feature.subtitle}
        />
      ))}
    </div>
    <div className="container">
      <h2 className="text-center my-5">Learn more about our solutions</h2>
      <div className="row gutters">
        {leanMoreOptions.map(option => (
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="rounded shadow p-3 h-100 d-flex">
              <h6>{option.text}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="container my-5">
      <CovidBanner />
    </div>
    <div className="bg-primary text-white text-center py-5 my-5">
      <div className="py-5">
        <h2>Would you like to see our products in action?</h2>
        <Link className="btn btn-outline-light rounded-0 mt-4 px-5">
          Book a free demo
        </Link>
      </div>
    </div>
  </Layout>
)

export default IndexPage
