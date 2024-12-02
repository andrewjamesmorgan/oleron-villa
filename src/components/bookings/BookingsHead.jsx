import React from "react";
import {Helmet} from "react-helmet";

export default function BookingsHead() {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="description"
          content="Book Oléron Villa, a spacious vacation home on Ile D'Oléron"
        />
        <meta
          name="keywords"
          content="holiday rental, Île d'Oléron, vacation home, beaches, stay in France, accommodation, Oléron, booking, holiday home"
        />
        <meta name="author" content="Andrew Morgan" />
        <meta name="robots" content="index, follow" />

        <title>Oléron Villa. Île d'Oléron Vacation Home - Bookings</title>

        <link rel="stylesheet" href="styles.css" /> {/* Replace with your CSS file path */}
        <link rel="icon" href="favicon.ico" type="image/x-icon" /> {/* Replace with your favicon path */}

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Holiday Rental on the Île d'Oléron" />
        <meta
          property="og:description"
          content="Enjoy an unforgettable stay on the Île d'Oléron in our vacation home. Just steps from beaches and local attractions. Book now!"
        />
        <meta property="og:image" content="https://oleronvilla.com/Oleron_Villa_OG.jpg" />
        <meta property="og:url" content="https://oleronvilla.com/#/bookings" /> {/* Replace with your site URL */}
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Holiday Rental on the Île d'Oléron" />
        <meta
          name="twitter:description"
          content="Enjoy an unforgettable stay on the Île d'Oléron in our vacation home. Just steps from beaches and local attractions. Book now!"
        />
      </Helmet>
    </>
  );
}