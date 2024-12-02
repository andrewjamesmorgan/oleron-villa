import React from "react";
import { Helmet } from "react-helmet";

export default function InsideHeadFR() {
  return (
    <>
      <Helmet>
        <html lang="fr" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="description"
          content="Découvrez les équipements et caractéristiques disponibles à l'intérieur de la Villa Oléron. Chambres confortables, systèmes de divertissement modernes et cuisine entièrement équipée pour un séjour relaxant."
        />
        <meta
          name="keywords"
          content="Villa Oléron, équipements intérieurs, location de vacances, maison de vacances, chambres, cuisine, divertissement, salle à manger, Île d'Oléron"
        />
        <meta name="author" content="Andrew Morgan" />
        <meta name="robots" content="index, follow" />

        <title>À l'intérieur de la Villa Oléron - Explorez les équipements</title>

        <link rel="stylesheet" href="styles.css" /> {/* Remplacez par le chemin de votre fichier CSS */}
        <link rel="icon" href="favicon.ico" type="image/x-icon" /> {/* Remplacez par le chemin de votre favicon */}

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="À l'intérieur de la Villa Oléron - Explorez les équipements" />
        <meta
          property="og:description"
          content="Découvrez l'intérieur de la Villa Oléron, avec des chambres spacieuses, une cuisine moderne, des systèmes de divertissement, et plus encore. Idéal pour un séjour relaxant sur l'Île d'Oléron."
        />
        <meta property="og:image" content="https://oleronvilla.com/Oleron_Villa_OG.jpg" />
        <meta property="og:url" content="https://oleronvilla.com/#/inside_house-fr" /> {/* Remplacez par l'URL de votre site */}
        <meta property="og:locale" content="fr_FR" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="À l'intérieur de la Villa Oléron - Explorez les équipements" />
        <meta
          name="twitter:description"
          content="Découvrez l'intérieur de la Villa Oléron, avec des chambres spacieuses, une cuisine moderne, des systèmes de divertissement, et plus encore. Idéal pour un séjour relaxant sur l'Île d'Oléron."
        />
      </Helmet>
    </>
  );
}