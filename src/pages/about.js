import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import PrimaryDemoBanner from "../components/primary-demo-banner"
import assets from "../data/assets"
import leanMoreOptions from "../data/learnMoreOptions"
import RightArrowIcon from "../images/icons/arrow-right.svg"

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
            <div className="d-flex border h-100 w-100"></div>
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
            <div className="d-flex border h-100 w-100"></div>
          </div>
        </div>
        {/* What we offer End */}

        {/* Our Solutions*/}
        <div className="row my-5 py-5">
          <div className="col-lg-6">
            <div className="d-flex border h-100 w-100"></div>
          </div>
          <div className="col-lg-6">
            <div className="text-left mb-3">
              {" "}
              <LightTitleBox text="WHAT WE OFFER" />
            </div>
            <h2 className="mb-5 text-left">
              Our Solutions Are Tailored To Your Specific Industry
              <span className="text-primary">Needs.</span>
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
      <div className="bg-primary my-5">
        <div className="container py-5">
          <div className="row text-white py-4">
            <div className="col-lg-8">
              <h6 className="m-0">Schedule a free consultation</h6>
              <h2>
                Do you want to know if Eltaj solution is a good fit for your
                business needs?
              </h2>
            </div>
            <div className="col-lg-4 d-lg-flex justify-content-end align-items-center">
              {" "}
              <Link className="btn btn-outline-light rounded-0 mt-4 px-5">
                Book a free demo
              </Link>
            </div>
          </div>
        </div>
      </div>

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
                <AssetsInfoBox title={asset.title} subtitle={asset.subtitle} />
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

const LightTitleBox = props => (
  <span className="rounded py-1 px-2  bg-light">
    <small>{props.text}</small>
  </span>
)

const AssetsInfoBox = props => (
  <>
    <div className="p-3 shadow">
      <div className="bg-light" style={{ height: "80px", width: "80px" }}></div>
      <h5 className="text-left my-4">{props.title}</h5>
      <div className="text-muted text-left">
        <small> {props.subtitle}</small>
      </div>
    </div>
  </>
)
export default about
