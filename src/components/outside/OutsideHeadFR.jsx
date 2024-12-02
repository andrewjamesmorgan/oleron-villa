import React from "react";
import { Helmet } from "react-helmet";

export default function OutsideHeadFR() {
  return (
    <>
      <Helmet>
        <html lang="fr" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="description"
          content="Découvrez les installations extérieures de la Villa Oléron. Profitez d'une grande terrasse, d'un jardin, d'un barbecue et d'un solarium pour vous détendre au soleil."
        />
        <meta
          name="keywords"
          content="Villa Oléron, équipements extérieurs, terrasse, jardin, barbecue, solarium, repas en plein air, maison de vacances, Île d'Oléron"
        />
        <meta name="author" content="Andrew Morgan" />
        <meta name="robots" content="index, follow" />

        <title>Équipements extérieurs de la Villa Oléron - Île d'Oléron</title>

        <link rel="stylesheet" href="styles.css" /> {/* Remplacez par le chemin de votre fichier CSS */}
        <link rel="icon" href="favicon.ico" type="image/x-icon" /> {/* Remplacez par le chemin de votre favicon */}

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Équipements extérieurs de la Villa Oléron - Île d'Oléron" />
        <meta
          property="og:description"
          content="Découvrez les espaces extérieurs de la Villa Oléron, avec une grande terrasse, un barbecue, un jardin et un solarium. Idéal pour profiter du soleil et des repas en plein air sur l'Île d'Oléron."
        />
        <meta property="og:image" content="image-url.jpg" /> {/* Remplacez par l'URL de votre image */}
        <meta property="og:url" content="https://oleronvilla.com/#/outside_house-fr" /> {/* Remplacez par l'URL de votre site */}
        <meta property="og:locale" content="fr_FR" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Équipements extérieurs de la Villa Oléron - Île d'Oléron" />
        <meta
          name="twitter:description"
          content="Découvrez les espaces extérieurs de la Villa Oléron, avec une grande terrasse, un barbecue, un jardin et un solarium. Idéal pour profiter du soleil et des repas en plein air sur l'Île d'Oléron."
        />
      </Helmet>
    </>
  );
}