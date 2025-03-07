import React from "react";
import { Helmet } from "react-helmet";

export default function loginHead() {
  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <meta
          name="description"
          content="Login page. Only to be used by the property owners."
        />
      </Helmet>
    </>
  );
}