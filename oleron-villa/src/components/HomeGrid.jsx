import { useContext } from 'react';
import { UserContext } from '../App';
import InfoBox from './InfoBox';

export default function HomeGrid({action}) {
  const { language } = useContext(UserContext);

  return (
    <>
    <div className='responsive-grid'>
      <InfoBox 
        imageSrc="/images/outside/Oleron_Garden_TT_1900.jpg"
        alt={language === "fr" ? "Un photo" : "A photo"}
        action={action}
        route={language === "fr" ? "/booking-fr" : "/booking"} // TODO: Change route
        body={`
          <h3>Facilities</h3>
          <p>You should find everything you need for a comfortable and enjoyable stay. The kitchen is well equipped with dish-washer, microwave, oven, crockery, etc. In the lounge there is a hi-def TV together with both English and French programs - together with a great sound system. Wireless broadband is available throughout the house. Outside there is garden furniture, a barbecue and some bikes that you can borrow.</p>
        `}
      />
      <InfoBox 
        imageSrc="/images/outside/Oleron_Garden_TT_1900.jpg"
        alt={language === "fr" ? "Un photo" : "A photo"}
        action={action}
        route={language === "fr" ? "/booking-fr" : "/booking"} // TODO: Change route
        body={`
          <h3>Facilities</h3>
          <p>You should find everything you need for a comfortable and enjoyable stay. The kitchen is well equipped with dish-washer, microwave, oven, crockery, etc. In the lounge there is a hi-def TV together with both English and French programs - together with a great sound system. Wireless broadband is available throughout the house. Outside there is garden furniture, a barbecue and some bikes that you can borrow.</p>
        `}
      />
      <InfoBox 
        imageSrc="/images/outside/Oleron_Garden_TT_1900.jpg"
        alt={language === "fr" ? "Un photo" : "A photo"}
        action={action}
        route={language === "fr" ? "/booking-fr" : "/booking"} // TODO: Change route
        body={`
          <h3>Facilities</h3>
          <p>You should find everything you need for a comfortable and enjoyable stay. The kitchen is well equipped with dish-washer, microwave, oven, crockery, etc. In the lounge there is a hi-def TV together with both English and French programs - together with a great sound system. Wireless broadband is available throughout the house. Outside there is garden furniture, a barbecue and some bikes that you can borrow.</p>
        `}
      />
    </div>
    <div className='responsive-grid'>
    <InfoBox 
      imageSrc="/images/outside/Oleron_Garden_TT_1900.jpg"
      alt={language === "fr" ? "Un photo" : "A photo"}
      action={action}
      route={language === "fr" ? "/booking-fr" : "/booking"} // TODO: Change route
      body={`
        <h3>Facilities</h3>
        <p>You should find everything you need for a comfortable and enjoyable stay. The kitchen is well equipped with dish-washer, microwave, oven, crockery, etc. In the lounge there is a hi-def TV together with both English and French programs - together with a great sound system. Wireless broadband is available throughout the house. Outside there is garden furniture, a barbecue and some bikes that you can borrow.</p>
      `}
    />
    <InfoBox 
      imageSrc="/images/outside/Oleron_Garden_TT_1900.jpg"
      alt={language === "fr" ? "Un photo" : "A photo"}
      action={action}
      route={language === "fr" ? "/booking-fr" : "/booking"} // TODO: Change route
      body={`
        <h3>Facilities</h3>
        <p>You should find everything you need for a comfortable and enjoyable stay. The kitchen is well equipped with dish-washer, microwave, oven, crockery, etc. In the lounge there is a hi-def TV together with both English and French programs - together with a great sound system. Wireless broadband is available throughout the house. Outside there is garden furniture, a barbecue and some bikes that you can borrow.</p>
      `}
    />
    <InfoBox 
      imageSrc="/images/outside/Oleron_Garden_TT_1900.jpg"
      alt={language === "fr" ? "Un photo" : "A photo"}
      action={action}
      route={language === "fr" ? "/booking-fr" : "/booking"} // TODO: Change route
      body={`
        <h3>Facilities</h3>
        <p>You should find everything you need for a comfortable and enjoyable stay. The kitchen is well equipped with dish-washer, microwave, oven, crockery, etc. In the lounge there is a hi-def TV together with both English and French programs - together with a great sound system. Wireless broadband is available throughout the house. Outside there is garden furniture, a barbecue and some bikes that you can borrow.</p>
      `}
    />
  </div>
  </>
  );
}