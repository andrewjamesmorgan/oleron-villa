import React from "react";
import { Helmet } from "react-helmet";

export default function OutsideHead() {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="description"
          content="Discover the outdoor facilities at Oléron Villa. Enjoy a spacious terrace, garden, outdoor dining, a barbecue area, and a solarium for soaking up the sun."
        />
        <meta
          name="keywords"
          content="Oléron Villa, outdoor facilities, terrace, garden, barbecue, solarium, outdoor dining, vacation home, Île d'Oléron"
        />
        <meta name="author" content="Andrew Morgan" />
        <meta name="robots" content="index, follow" />

        <title>Outdoor Facilities at Oléron Villa - Île d'Oléron</title>

        <link rel="stylesheet" href="styles.css" /> {/* Replace with your CSS file path */}
        <link rel="icon" href="favicon.ico" type="image/x-icon" /> {/* Replace with your favicon path */}

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Outdoor Facilities at Oléron Villa - Île d'Oléron" />
        <meta
          property="og:description"
          content="Explore the outdoor spaces at Oléron Villa, including a large terrace, barbecue, garden, and solarium. Perfect for enjoying the sun and outdoor dining on Île d'Oléron."
        />
        <meta property="og:image" content="https://oleronvilla.com/images/Oleron_Villa_OG.jpg" />
        <meta property="og:url" content="https://oleronvilla.com/#/outside_house" /> {/* Replace with your site URL */}
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Outdoor Facilities at Oléron Villa - Île d'Oléron" />
        <meta
          name="twitter:description"
          content="Explore the outdoor spaces at Oléron Villa, including a large terrace, barbecue, garden, and solarium. Perfect for enjoying the sun and outdoor dining on Île d'Oléron."
        />
      </Helmet>
    </>
  );
}