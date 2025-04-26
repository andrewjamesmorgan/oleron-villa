import React from "react";
import { Helmet } from "react-helmet";

export default function StayHead() {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="description"
          content="Information for tenants staying at Thieves Garden. Learn about facilities, guidelines, and contact details for your stay in Maidenhead, Berkshire."
        />
        <meta
          name="keywords"
          content="Thieves Garden, tenant information, facilities, guidelines, Maidenhead, serviced apartment, rental, Berkshire"
        />
        <meta name="author" content="Andrew Morgan" />
        <meta name="robots" content="index, follow" />

        <title>Tenant Information - Thieves Garden, Maidenhead</title>
        <link rel="icon" href="favicon.ico" type="image/x-icon" /> 

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Tenant Information - Thieves Garden, Maidenhead" />
        <meta
          property="og:description"
          content="Essential information for tenants staying at Thieves Garden, a serviced apartment in Maidenhead. Learn about facilities, guidelines, and contact details."
        />
        <meta property="og:image" content="https://thievesgarden.co.uk/images/maidenhead-apartment-OG.jpg" />
        <meta property="og:url" content="https://thievesgarden.co.uk/#/stay" /> 
        <meta property="og:locale" content="en_GB" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tenant Information - Thieves Garden, Maidenhead" />
        <meta
          name="twitter:description"
          content="Find all the information you need for your stay at Thieves Garden, a serviced apartment in Maidenhead."
        />
        <meta name="twitter:image" content="https://thievesgarden.co.uk/images/maidenhead-apartment-OG.jpg" />
      </Helmet>
    </>
  );
}