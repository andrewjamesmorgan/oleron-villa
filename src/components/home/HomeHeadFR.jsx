import React from "react";
import { Helmet } from "react-helmet";

export default function HomeHeadFR() {
  return (
    <>
      <Helmet>
        <html lang="fr" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="description"
          content="Bienvenue à Oléron Villa, une magnifique maison de vacances sur l'Île d'Oléron. Idéale pour les familles et les groupes souhaitant un séjour relaxant près des plages et des attractions locales."
        />
        <meta
          name="keywords"
          content="Villa Oléron, maison de vacances, Île d'Oléron, location saisonnière, plages, séjour en famille, hébergement, voyage en France"
        />
        <meta name="author" content="Andrew Morgan" />
        <meta name="robots" content="index, follow" />

        <title>Villa Oléron - Maison de vacances sur l'Île d'Oléron</title>

        <link rel="stylesheet" href="styles.css" /> {/* Remplacez par le chemin de votre fichier CSS */}
        <link rel="icon" href="favicon.ico" type="image/x-icon" /> {/* Remplacez par le chemin de votre favicon */}

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Villa Oléron - Maison de vacances sur l'Île d'Oléron" />
        <meta
          property="og:description"
          content="Découvrez la Villa Oléron, une magnifique maison de vacances sur l'Île d'Oléron. Détendez-vous près des plages de sable et explorez les attractions locales."
        />
        <meta property="og:image" content="image-url.jpg" /> {/* Remplacez par l'URL de votre image */}
        <meta property="og:url" content="https://oleronvilla.com/#/fr" /> {/* Remplacez par l'URL de votre site */}
        <meta property="og:locale" content="fr_FR" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Villa Oléron - Maison de vacances sur l'Île d'Oléron" />
        <meta
          name="twitter:description"
          content="Découvrez la Villa Oléron, une magnifique maison de vacances sur l'Île d'Oléron. Détendez-vous près des plages de sable et explorez les attractions locales."
        />
      </Helmet>
    </>
  );
}