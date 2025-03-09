import React from "react";
import { Helmet } from "react-helmet";

export default function logoutHead() {
  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <meta
          name="description"
          content="Logout page. Only to be used by the property owners."
        />
      </Helmet>
    </>
  );
}