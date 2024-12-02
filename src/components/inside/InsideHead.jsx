import React from "react";
import { Helmet } from "react-helmet";

export default function InsideHead() {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="description"
          content="Discover the features and amenities available inside Oléron Villa. From comfortable bedrooms to modern entertainment systems and a fully equipped kitchen, find everything you need for a relaxing stay."
        />
        <meta
          name="keywords"
          content="Oléron Villa, inside amenities, holiday rental, vacation home, bedrooms, kitchen, entertainment, dining, Île d'Oléron"
        />
        <meta name="author" content="Andrew Morgan" />
        <meta name="robots" content="index, follow" />

        <title>Inside Oléron Villa - Explore Amenities and Features</title>

        <link rel="stylesheet" href="styles.css" /> {/* Replace with your CSS file path */}
        <link rel="icon" href="favicon.ico" type="image/x-icon" /> {/* Replace with your favicon path */}

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Inside Oléron Villa - Explore Amenities and Features" />
        <meta
          property="og:description"
          content="Explore the interior of Oléron Villa, including spacious bedrooms, a modern kitchen, entertainment systems, and more. Perfect for a relaxing stay on Île d'Oléron."
        />
        <meta property="og:image" content="image-url.jpg" /> {/* Replace with your image URL */}
        <meta property="og:url" content="https://oleronvilla.com/#/inside_house" /> {/* Replace with your site URL */}
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Inside Oléron Villa - Explore Amenities and Features" />
        <meta
          name="twitter:description"
          content="Explore the interior of Oléron Villa, including spacious bedrooms, a modern kitchen, entertainment systems, and more. Perfect for a relaxing stay on Île d'Oléron."
        />
      </Helmet>
    </>
  );
}