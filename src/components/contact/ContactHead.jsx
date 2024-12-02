import React from "react";
import { Helmet } from "react-helmet";

export default function ContactHead() {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="description"
          content="Get in touch with Oléron Villa to inquire about bookings or ask questions about our vacation home on Île d'Oléron."
        />
        <meta
          name="keywords"
          content="contact Oléron Villa, vacation home inquiries, Île d'Oléron, holiday rental, accommodation, contact form"
        />
        <meta name="author" content="Andrew Morgan" />
        <meta name="robots" content="index, follow" />

        <title>Contact Oléron Villa - Île d'Oléron Vacation Home</title>

        <link rel="stylesheet" href="styles.css" /> {/* Replace with your CSS file path */}
        <link rel="icon" href="favicon.ico" type="image/x-icon" /> {/* Replace with your favicon path */}

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact Oléron Villa - Vacation Home on Île d'Oléron" />
        <meta
          property="og:description"
          content="Reach out to Oléron Villa with your inquiries or questions about our vacation home. Conveniently located near the best attractions on Île d'Oléron."
        />
        <meta property="og:image" content="https://oleronvilla.com/Oleron_Villa_OG.jpg" />
        <meta property="og:url" content="http://oleronvilla.com/#/contact" /> {/* Replace with your site URL */}
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Oléron Villa - Vacation Home on Île d'Oléron" />
        <meta
          name="twitter:description"
          content="Reach out to Oléron Villa with your inquiries or questions about our vacation home. Conveniently located near the best attractions on Île d'Oléron."
        />
      </Helmet>
    </>
  );
}