import { useContext } from 'react';
import { UserContext } from '../../../App';
import InfoBox from '../../InfoBox';

export default function WifiCell({ action }) {
  const { language } = useContext(UserContext);

  const body = (
    <>
      <h3>{language === "fr" ? "Internet" : "Internet"}</h3>
      <p>
        {language === "fr"
          ? "La maison dispose d'un internet rapide - filaire et sans fil (WiFi)."
          : "The house has fast internet - wired and wireless (WiFi)."}
      </p>
      <p>
        {language === "fr"
          ? (
            <>
              Le réseau WiFi est <strong>oleronvilla-com</strong> et le mot de passe est <strong>holiday2Vac</strong>.
            </>
          )
          : (
            <>
              The WiFi network is <strong>oleronvilla-com</strong> and the password is <strong>holiday2Vac</strong>.
            </>
          )}
      </p>
    </>
  );

  return (
    <InfoBox
      imageSrc="../../images/facilities/oleron-wifi.jpg"
      alt={language === "fr" ? "Symboles WiFi" : "Wifi symbols"}
      action={action}
      body={body}
      centerX={50}
      centerY={60}
    />
  );
}