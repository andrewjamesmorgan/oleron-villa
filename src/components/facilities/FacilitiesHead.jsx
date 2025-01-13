import React from "react";
import { Helmet } from "react-helmet";

export default function FacilitiesHead() {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="description"
          content="Discover the facilities at Oléron Villa, a fully equipped holiday home on the Île d'Oléron. Everything you need for a comfortable and enjoyable stay."
        />
        <meta
          name="keywords"
          content="Oléron Villa, facilities, holiday rental, Île d'Oléron, accommodation, kitchen, dining, outdoor entertaining, internet, cycling, family-friendly"
        />
        <meta name="author" content="Andrew Morgan" />
        <meta name="robots" content="index, follow" />

        <title>Facilities at Oléron Villa - Holiday Rental on Île d'Oléron</title>

        <link rel="stylesheet" href="styles.css" /> {/* Replace with your CSS file path */}
        <link rel="icon" href="favicon.ico" type="image/x-icon" /> {/* Replace with your favicon path */}

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Facilities at Oléron Villa - Holiday Rental on Île d'Oléron" />
        <meta
          property="og:description"
          content="Explore the facilities at Oléron Villa, including a fully equipped kitchen, spacious dining area, outdoor entertaining spaces, internet, and much more."
        />
        <meta property="og:image" content="https://oleronvilla.com/images/Oleron_Villa_OG.jpg" />
        <meta property="og:url" content="https://oleronvilla.com/#/facilities" /> {/* Replace with your site URL */}
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Facilities at Oléron Villa - Holiday Rental on Île d'Oléron" />
        <meta
          name="twitter:description"
          content="Explore the facilities at Oléron Villa, including a fully equipped kitchen, spacious dining area, outdoor entertaining spaces, internet, and much more."
        />
      </Helmet>
    </>
  );
}