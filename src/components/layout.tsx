/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "./layout.scss";
import { Grommet } from 'grommet';
import Footer from './footer';
import Toolbar from './toolbar';

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <Grommet
      style={{
        height: '100%'
      }}
    >
      <div className="o-page">
        <Header siteTitle={"WEVR Gatsby Starter"} />
        <Toolbar />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 1.0875rem 1.45rem`,
          }}
        >
          <div className="container page-content">
            {children}
          </div>
          <div className="container">
            <Footer />
          </div>
        </div>
      </div>
    </Grommet>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
