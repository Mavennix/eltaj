import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const leanMoreOptions = [
  {
    text: "Queue Management",
    to: "/about-us",
  },
  {
    text: "Customer Journey Management",
    to: "/about-us",
  },
  {
    text: "Customer Feedback",
    to: "/about-us",
  },
  {
    text: "Business Intelligence",
    to: "/about-us",
  },
]
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container">
      <h2>Learn more about our solutions</h2>
      <div className="row gutters row-eq-height">
        {
          leanMoreOptions.map( option => <div className = "col-lg-3 col-md-6">
            <div className="rounded shadow p-3">
            <h6>{option.text}</h6>

            </div>
          </div>)
        }
      </div>
    </div>
    <div className="bg-primary text-white text-center py-5 my-5">
      <h2>Would you like to see our products in action?</h2>
      <Link className="btn btn-outline-light rounded-0 mt-4 px-5">
        Book a free demo
      </Link>
    </div>
  </Layout>
)

export default IndexPage
