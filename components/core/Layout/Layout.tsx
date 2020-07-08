// Components
import { SiteHead } from "../SiteHead";

// Types
import { ReactNode } from "react";

// Styles
import { LayoutStyle } from "./styles.scss";

// Utils

// Begin Component
// __________________________________________________________________________________________

type LMNTS_Layout = {
  children: ReactNode;
};

/**
 *
 * Layout.js
 * @author Peter Laxalt
 * @description The website layout.
 * @param {ReactNode} children
 */
export const Layout: React.FunctionComponent<LMNTS_Layout> = ({ children }) => {
  return (
    <>
      <SiteHead />

      <LayoutStyle>{children}</LayoutStyle>
    </>
  );
};
