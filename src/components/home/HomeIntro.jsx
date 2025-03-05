import { useContext } from 'react';
import { UserContext } from '../../App';

export default function HomeIntro() {
  const { language } = useContext(UserContext);

  return (
    <>
      <div id='home-intro' className='banner-image-text'>
        <h1>Oléron Villa</h1>
        <img
          src="../../images/outside/Oleron_Garden_TT_1900.jpg"
          alt={language === "en" ? "Garden and outdoor dining for Oléron Villa holiday home. Family playing table tennis."
                                : "Jardin et repas extérieurs pour la maison de vacances Oléron Villa. Famille jouant au ping-pong"}
          className='full-width-image'
        />
      </div>
      <div className='responsive-text'>
        { language === "en" && <h2>Welcome to Oléron Villa, a luxury, well equipped holiday home on Île d'Oléron - just a few minutes' walk through the woods from glorious family & surf beaches</h2> }
        { language === "fr" && <h2>Bienvenue sur Oléron Villa, une maison de vacances haut de gamme et très bien équipée sur la belle île d'Oléron réputée pour sa côte sauvage et ses plages de sable fin à quelques minutes de marche à travers la forêt.</h2> }
        { language === "en" &&
          <div>
            <p>Just a short, woodland's walk from a quiet, sandy beach, Oléron Villa is a detached, four bedroom house located on the edge of Grand-Village-Plage on Île d'Oléron - an island just off the French Atlantic coast. The island is popular with both families and surfers due to the beautiful beaches, outdoor activities and delicious local food - especially, fish, seafood, fruit & vegetables and Pineau - the local drink. The house is very modern (completed in January 2012) and is set up to provide a very comfortable place to stay and can sleep ten or more people. There is plenty of space outside for kids to play and adults to eat, drink and unwind but the beaches are the main attraction for the island and they are just a few minutes away via a short walk through the woods.</p>
          </div>
        }
        { language === "fr" &&
        <div>
            <p>Oléron Villa est une belle maison indépendante de 4 grandes chambres dans la petite commune de Grand Village plage dans le sud de l'île d'Oléron. Cette ile au large de la côte atlantique est très appréciée pour ces belles pages de vague, ses activités de plein air, ses produits frais de la région (poisson frais, fruits et légumes délicieux) et sa boisson locale – le Pineau des Charentes.</p>
            <p>La maison finie en 2012 a été aménagée avec soin afin d'apporter tous les conforts tant pour un séjour court que long. Vous trouverez le cadre de notre maison unique, avec beaucoup d'espace extérieur, des chambres confortables, mais surtout un accès à la plage par un sentier forestier merveilleux, sans une route à traverser, sans croiser une voiture.</p>
          </div>
        }
      </div>
    </>
  );
}