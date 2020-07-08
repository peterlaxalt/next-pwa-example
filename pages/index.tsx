// Core
import React from "react";

// Types
import { NextPage } from "next";

// Utilities

// Begin Component
// __________________________________________________________________________________________

type LMNTS_HomePage = {};

/**
 *
 * pages/index.tsx
 * @author Peter Laxalt
 * @description The website homepage.
 *
 */
const FrontPage: NextPage<LMNTS_HomePage> = () => {
  return (
    <div
      className="__route-home-page"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h1>Next PWA Example</h1>
    </div>
  );
};

export default FrontPage;