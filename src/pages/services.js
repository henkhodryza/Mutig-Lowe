import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Services = () => (
  <Layout>
    <SEO title="Page two" />
    <div className="temp-container">
      <h1>More services on its way</h1>
      <p>Thank you for your intrest</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default Services
