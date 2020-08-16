import React from "react"
import Layout from "../components/layout"
import PrimaryDemoBanner from "../components/primary-demo-banner"
import SecondaryDemoBanner from "../components/secondary-demo-banner"
import assets from "../data/assets"
import leanMoreOptions from "../data/learnMoreOptions"
import RightArrowIcon from "../images/icons/arrow-right.svg"
import AssetInfoBox from "../components/asset-info-box/asset-info-box"
import LightTitleBox from "../components/light-title-box"
import WhoWeAre from '../images/about/about.png'
import WhatWeOfferImg from '../images/about/what-we-offer.png'
import SolutionTailoredImg from '../images/about/solution-tailored.png'

import EltajImage from "../components/eltaj-image/eltaj-image"

const about = () => {
  return (
    <Layout>
      <div
        className="d-flex align-items-center justify-content-center flex-column"
        style={{ backgroundImage: "radial-gradient( #FFFFFF, #CBCEFF)", minHeight: "50vh" }}
      >
        <h3>About Eltaj</h3>
        <h5 className="text-primary">Home | About</h5>
      </div>
      <div className="container text-center">
        <div className="my-5">
          <div className="my-3">
            <LightTitleBox text="WHO WE ARE" />
          </div>
          <h2>
            We Create A Digital Experience At Each{" "}
            <span className="text-primary d-block">Touchpoint.</span>
          </h2>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="d-flex h-100 w-100">
              <EltajImage image={WhoWeAre} isImageRight={false}/>
            </div>
          </div>
          <div className="col-lg-6">
            <h6 className=" text-left mb-4 text-muted">
              Our company has a proven track record of harnessing the power of
              technology and innovation in creating a seamless experience
              between businesses and their customers.
            </h6>
            <h6 className="text-left mb-4 text-muted">
              From finance to telecommunication, to the public sector, down to
              the healthcare industry, we provide digital solutions that engage
              and delight customers and in turn promote retention.
            </h6>
            <h6 className=" text-left mb-4 text-muted">
              Furthermore, in collaboration with our global partners, we provide
              a robust technology and market solution for enterprises in over
              120 countries, helping them transform the customer journey at
              every touchpoint.
            </h6>
            <h6 className=" text-left mb-4 text-muted">
              Our customer experience solutions include customer journey
              management, queue management, customer feedback, and business
              intelligence that are up-to-date with evolving customer behaviour
              to help you create a seamless digital experience when they
              interact with your business in all branches.
            </h6>
          </div>
        </div>

        {/* What We Offer */}
        <div className="row my-5 py-5">
          <div className="col-lg-6">
            <div className="text-left mb-3">
              {" "}
              <LightTitleBox text="WHAT WE OFFER" />
            </div>
            <h2 className="mb-5 text-left">
              A solution that evolves with a shifting{" "}
              <span className="text-primary">paradigm.</span>
            </h2>
            <h6 className="text-left mb-4 text-muted">
              At Eltaj, we understand that the world is evolving and as it
              evolves, the customer behaviour also changes and enterprises have
              to adjust to that change to keep meeting customers needs and boost
              revenue.
            </h6>
            <h6 className="text-left mb-4 text-muted">
              Our customer experience solution is integrated with predictive
              intelligence and machine learning that helps you gain actionable
              insights into your customer’s ever-evolving interaction with your
              enterprise to help you create a consistent experience for them.
            </h6>
          </div>
          <div className="col-lg-6">
            <div className="d-flex h-100 w-100">
            <EltajImage image={WhatWeOfferImg} isImageRight={true}/>
            </div>
          </div>
        </div>
        {/* What we offer End */}

        {/* Our Solutions*/}
        <div className="row my-5 py-5">
          <div className="col-lg-6">
            <div className="d-flex h-100 w-100">
            <EltajImage image={SolutionTailoredImg} isImageRight={false}/>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="text-left mb-3">
              {" "}
              <LightTitleBox text="WHAT WE OFFER" />
            </div>
            <h2 className="mb-5 text-left">
              Our Solutions Are Tailored To Your Specific Industry
              <span className="text-primary"> Needs.</span>
            </h2>
            <h6 className="text-left mb-4 text-muted">
              We do not assume that our solution fits all industries. This is
              why we use proven market data to tailor our digital solutions to
              specific industry needs. Our robust solutions can be customized to
              fits any business in your industry
            </h6>
            <div className="row">
              {leanMoreOptions.map(option => (
                <div className="col-lg-6 mb-5 text-left">
                  <div className="rounded shadow p-3 d-flex flex-column align-items-start justify-content-between h-100">
                    <h4 className>{option.text}</h4>
                    <img src={RightArrowIcon} alt="" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Our Solution */}
      </div>

      {/* Book Demo Banner */}
     <SecondaryDemoBanner/>

      <div className="container text-center py-5">
        <h2 className="mb-4">
          The biggest asset a business can have is her
          <span className="text-primary d-block">Customers.</span>
        </h2>
        <div className="row mb-5">
          <div className="col-lg-6 mx-auto">
            <h6 className=" mb-4 text-muted">
              While we offer your company a customer experience solution, we
              also ensure you have a seamless experience in your journey with
              us.
            </h6>
          </div>
        </div>

        <div className="row">
          {assets.map((asset, index) => (
            <div className="col-lg-3">
              <div className="d-flex h-100">
                <AssetInfoBox title={asset.title} subtitle={asset.subtitle} image={asset.image}/>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Primary Demo Banner */}
      <PrimaryDemoBanner />
    </Layout>
  )
}



export default about
