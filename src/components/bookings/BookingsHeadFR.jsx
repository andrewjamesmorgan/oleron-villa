import React from "react";
import { Helmet } from "react-helmet";

export default function BookingsHeadFR() {
  return (
    <>
      <Helmet>
        <html lang="fr" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="description"
          content="Réservez Oléron Villa, une maison de vacances spacieuse sur l'Île d'Oléron"
        />
        <meta
          name="keywords"
          content="location de vacances, Île d'Oléron, maison de vacances, plages, séjour en France, hébergement, Oléron, réservation, maison de vacances"
        />
        <meta name="author" content="Andrew Morgan" />
        <meta name="robots" content="index, follow" />

        <title>Oléron Villa. Maison de vacances sur l'Île d'Oléron - Réservations</title>

        <link rel="stylesheet" href="styles.css" /> {/* Remplacez par le chemin de votre fichier CSS */}
        <link rel="icon" href="favicon.ico" type="image/x-icon" /> {/* Remplacez par le chemin de votre favicon */}

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Location de vacances sur l'Île d'Oléron" />
        <meta
          property="og:description"
          content="Profitez d'un séjour inoubliable sur l'Île d'Oléron dans notre maison de vacances. À deux pas des plages et des attractions locales. Réservez maintenant !"
        />
        <meta property="og:image" content="https://oleronvilla.com/images/Oleron_Villa_OG.jpg" />
        <meta property="og:url" content="https://oleronvilla.com/#/bookings-fr" /> 
        <meta property="og:locale" content="fr_FR" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Location de vacances sur l'Île d'Oléron" />
        <meta
          name="twitter:description"
          content="Profitez d'un séjour inoubliable sur l'Île d'Oléron dans notre maison de vacances. À deux pas des plages et des attractions locales. Réservez maintenant !"
        />
      </Helmet>
    </>
  );
}