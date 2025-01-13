import React from "react";
import { Helmet } from "react-helmet";

export default function LocationHeadFR() {
  return (
    <>
      <Helmet>
        <html lang="fr" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="description"
          content="Découvrez l'emplacement idéal de la Villa Oléron sur l'Île d'Oléron. À quelques pas des plages, des forêts et des villages pittoresques, c'est le point de départ parfait pour explorer cette belle île."
        />
        <meta
          name="keywords"
          content="Villa Oléron, emplacement, Île d'Oléron, plages, forêts, villages, location de vacances, maison de vacances, île française, Charente-Maritime"
        />
        <meta name="author" content="Andrew Morgan" />
        <meta name="robots" content="index, follow" />

        <title>Emplacement de la Villa Oléron - Explorez l'Île d'Oléron</title>

        <link rel="stylesheet" href="styles.css" /> {/* Remplacez par le chemin de votre fichier CSS */}
        <link rel="icon" href="favicon.ico" type="image/x-icon" /> {/* Remplacez par le chemin de votre favicon */}

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Emplacement de la Villa Oléron - Explorez l'Île d'Oléron" />
        <meta
          property="og:description"
          content="La Villa Oléron est située sur la pittoresque Île d'Oléron, à proximité des plages de sable, des forêts verdoyantes et des villages charmants. Idéal pour des vacances relaxantes ou aventureuses."
        />
        <meta property="og:image" content="https://oleronvilla.com/images/Oleron_Villa_OG.jpg" />
        <meta property="og:url" content="https://oleronvilla.com/#/location-fr" /> {/* Remplacez par l'URL de votre page */}
        <meta property="og:locale" content="fr_FR" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Emplacement de la Villa Oléron - Explorez l'Île d'Oléron" />
        <meta
          name="twitter:description"
          content="La Villa Oléron est située sur la pittoresque Île d'Oléron, à proximité des plages de sable, des forêts verdoyantes et des villages charmants. Idéal pour des vacances relaxantes ou aventureuses."
        />
      </Helmet>
    </>
  );
}