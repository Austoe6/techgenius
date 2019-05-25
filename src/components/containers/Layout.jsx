import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Helmet from 'react-helmet'

import normalize from '../styles/normalize'
import theme from '../styles/theme'
import Footer from './Footer'

const GlobalStyles = createGlobalStyle`
  ${normalize}
`

class Layout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <React.Fragment>
        <Helmet>
          <title>Techgenius - By Austin Okhala</title>
          <meta
            name="description"
            content="Techgenius - by Austin Okhala, previous projects, blog, about me"
          />
          <html lang="en" />
          <link
            rel="dns-prefetch"
            href="https://fonts.gstatic.com"
            crossorigin
          />
          <link
            rel="dns-prefetch"
            href="https://www.google-analytics.com"
            crossorigin
          />
          <link
            href="https://fonts.googleapis.com/css?family=Merriweather|Merriweather+Sans:400,800"
            rel="stylesheet"
          />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
        </Helmet>
        <GlobalStyles />
        <ThemeProvider theme={theme}>
          <>
            {children}
            <Footer />
          </>
        </ThemeProvider>
      </React.Fragment>
    )
  }
}
export default Layout
