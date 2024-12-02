import React from "react";
import { Helmet } from "react-helmet";

export default function HomeHead() {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="description"
          content="Welcome to Oléron Villa, a beautiful vacation home on the Île d'Oléron. Perfect for families and groups looking for a relaxing getaway near beaches and local attractions."
        />
        <meta
          name="keywords"
          content="Oléron Villa, vacation home, Île d'Oléron, holiday rental, beaches, family getaway, accommodation, France travel"
        />
        <meta name="author" content="Andrew Morgan" />
        <meta name="robots" content="index, follow" />

        <title>Oléron Villa - Vacation Home on Île d'Oléron</title>

        <link rel="stylesheet" href="styles.css" /> {/* Replace with your CSS file path */}
        <link rel="icon" href="favicon.ico" type="image/x-icon" /> {/* Replace with your favicon path */}

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Oléron Villa - Vacation Home on Île d'Oléron" />
        <meta
          property="og:description"
          content="Discover Oléron Villa, a stunning vacation home on the Île d'Oléron. Relax near sandy beaches and explore local attractions."
        />
        <meta property="og:image" content="image-url.jpg" /> {/* Replace with your image URL */}
        <meta property="og:url" content="https://oleronvilla.com" /> {/* Replace with your site URL */}
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Oléron Villa - Vacation Home on Île d'Oléron" />
        <meta
          name="twitter:description"
          content="Discover Oléron Villa, a stunning vacation home on the Île d'Oléron. Relax near sandy beaches and explore local attractions."
        />
      </Helmet>
    </>
  );
}