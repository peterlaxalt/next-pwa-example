// Core
import React from "react";
import App, { AppProps } from "next/app";

// Components
import { Layout } from "../components/core/Layout";

// Begin Component
// __________________________________________________________________________________________

type LMNTS_CustomAppState = {};

type LMNTS_CustomAppData = AppProps & {};

/**
 *
 * /pages/_app_.js
 * @author Peter Laxalt
 * @description The wrapper around every page. This is the best place to load data and
 * @description store it in our React Context to be accessible anywhere, so we are doing
 * @description one call for all data at a time.
 *
 */
class MyApp extends App<LMNTS_CustomAppData, LMNTS_CustomAppState> {
  render() {
    const { Component, pageProps } = this.props;

    // console.log("👀 this.props from _app: ", this.props);

    // Render our App
    return (
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default MyApp;
