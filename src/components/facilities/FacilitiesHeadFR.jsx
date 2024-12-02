import React from "react";
import { Helmet } from "react-helmet";

export default function FacilitiesHeadFR() {
  return (
    <>
      <Helmet>
        <html lang="fr" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="description"
          content="Découvrez les équipements de la villa Oléron, une maison de vacances entièrement équipée sur l'Île d'Oléron. Tout ce dont vous avez besoin pour un séjour confortable et agréable."
        />
        <meta
          name="keywords"
          content="Villa Oléron, équipements, location de vacances, Île d'Oléron, hébergement, cuisine, salle à manger, extérieur, internet, vélos, famille"
        />
        <meta name="author" content="Andrew Morgan" />
        <meta name="robots" content="index, follow" />

        <title>Équipements de la Villa Oléron - Location de vacances sur l'Île d'Oléron</title>

        <link rel="stylesheet" href="styles.css" /> {/* Remplacez par le chemin de votre fichier CSS */}
        <link rel="icon" href="favicon.ico" type="image/x-icon" /> {/* Remplacez par le chemin de votre favicon */}

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Équipements de la Villa Oléron - Location de vacances sur l'Île d'Oléron" />
        <meta
          property="og:description"
          content="Découvrez les équipements de la villa Oléron, comprenant une cuisine entièrement équipée, une grande salle à manger, des espaces extérieurs, internet, et bien plus encore."
        />
        <meta property="og:image" content="image-url.jpg" /> {/* Remplacez par l'URL de votre image */}
        <meta property="og:url" content="https://oleronvilla.com/#/facilities" /> {/* Remplacez par l'URL de votre site */}
        <meta property="og:locale" content="fr_FR" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Équipements de la Villa Oléron - Location de vacances sur l'Île d'Oléron" />
        <meta
          name="twitter:description"
          content="Découvrez les équipements de la villa Oléron, comprenant une cuisine entièrement équipée, une grande salle à manger, des espaces extérieurs, internet, et bien plus encore."
        />
      </Helmet>
    </>
  );
}