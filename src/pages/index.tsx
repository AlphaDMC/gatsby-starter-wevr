import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout";
import SEO from "../components/seo";
import LinkCard from '../components/link-card';
import { Box, Grid } from "grommet";

// import '../theme/scss/main.scss';
// import '../theme/main';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="u-mv-large u-text-center">
      <h2 className="u-mb-xsmall">Hi! Welcome back to the Dashboard.</h2>
      <p className="u-text-mute u-h6">Check out the documentation and information</p>
    </div>
    <Grid gap="small" rows={['fit']} columns={['1/3', '1/3', '1/3']}>
    {/* <Box direction="row" gap="40px"> */}
      <LinkCard imgSrc="img/logo.png" info="Dashboard is the bootstrap theme we use, to style our site" buttonText="Link To Documentation" buttonLink="https://dashboard.zawiastudio.com/" buttonColor="info" />
      <LinkCard imgSrc="//d24wuq6o951i2g.cloudfront.net/img/events/id/323/3234799/assets/8c5.grommet.png" info="grommet is a react-based framework that provides accessibility, modularity, responsiveness, and theming in a tidy package" buttonText="Link To Documentation" buttonLink="https://dashboard.zawiastudio.com/" buttonColor="fancy" />
      <LinkCard imgSrc="https://pbs.twimg.com/profile_images/1100804485616566273/sOct-Txm_400x400.png" info="Storybook is an open source tool for developing UI components in isolation for React, Vue, and Angular. It makes building stunning UIs organized and efficient." buttonText="Link To Documentation" buttonLink="https://storybook.js.org/" buttonColor="danger" />
    {/* </Box> */}
    </Grid>

    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
  </Layout>
)

export default IndexPage
