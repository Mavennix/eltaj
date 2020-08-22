import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import NotFoundImage from "../images/not-found.svg"
import PrimaryDemoBanner from "../components/primary-demo-banner"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="container mt-5">
      <div className="text-center">
        <img src={NotFoundImage} className="img-fluid" />
        <h2 className="display-4 font-weight-bold my-4">Page Not Found</h2>
        <h5>
          We are not sure what happened, we will look into this. Please go back
          to the homepage
        </h5>

        <Link to="/" className="btn btn-outline-primary rounded-0 my-3  px-5">Go Home</Link>
      </div>
    </div>
    <PrimaryDemoBanner />
  </Layout>
)

export default NotFoundPage
