import React from "react";
import { Helmet } from "react-helmet";

export default function LocationHead() {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="description"
          content="Discover the prime location of Oléron Villa on the Île d'Oléron. Just steps from beaches, forests, and charming villages, it's the perfect base for exploring this beautiful island."
        />
        <meta
          name="keywords"
          content="Oléron Villa, location, Île d'Oléron, beaches, forests, villages, holiday rental, vacation home, French island, Charente-Maritime"
        />
        <meta name="author" content="Andrew Morgan" />
        <meta name="robots" content="index, follow" />

        <title>Location of Oléron Villa - Explore Île d'Oléron</title>

        <link rel="stylesheet" href="styles.css" /> {/* Replace with your CSS file path */}
        <link rel="icon" href="favicon.ico" type="image/x-icon" /> {/* Replace with your favicon path */}

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Location of Oléron Villa - Explore Île d'Oléron" />
        <meta
          property="og:description"
          content="Oléron Villa is located on the picturesque Île d'Oléron, near sandy beaches, lush forests, and charming villages. Perfect for a relaxing or adventurous holiday."
        />
        <meta property="og:image" content="https://oleronvilla.com/Oleron_Villa_OG.jpg" />
        <meta property="og:url" content="https://oleronvilla.com/#/location" /> {/* Replace with your site URL */}
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Location of Oléron Villa - Explore Île d'Oléron" />
        <meta
          name="twitter:description"
          content="Oléron Villa is located on the picturesque Île d'Oléron, near sandy beaches, lush forests, and charming villages. Perfect for a relaxing or adventurous holiday."
        />
      </Helmet>
    </>
  );
}