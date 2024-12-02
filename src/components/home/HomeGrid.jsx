import { useContext } from 'react';
import { UserContext } from '../../App';
import InfoBox from '../InfoBox';
import InsideHouseCell from './homeGrid/InsideHouseCell';
import OutsideHouseCell from './homeGrid/OutsideHouseCell';
import LocationCell from './homeGrid/LocationCell';
import FacilitiesCell from './homeGrid/FacilitiesCell';
import BookingCell from './homeGrid/BookingCell';

export default function HomeGrid({action}) {
  const { language } = useContext(UserContext);

  return (
    <>
    <div className='responsive-grid'>
      <InsideHouseCell action={action} />
      <OutsideHouseCell action={action} />
      <FacilitiesCell action={action} />
    </div>
    <div className='responsive-grid'>
      <LocationCell action={action} />
      <BookingCell action={action} />
    <InfoBox 
      imageSrc="../../images/outside/Oleron_Garden_TT_1900.jpg"
      alt={language === "fr" ? "Un photo" : "A photo"}
      action={action}
      route={language === "fr" ? "/bookings-fr" : "/bookings"} // TODO: Change route
      body={`
        <h3>Facilities</h3>
        <p>You should find everything you need for a comfortable and enjoyable stay. The kitchen is well equipped with dish-washer, microwave, oven, crockery, etc. In the lounge there is a hi-def TV together with both English and French programs - together with a great sound system. Wireless broadband is available throughout the house. Outside there is garden furniture, a barbecue and some bikes that you can borrow.</p>
      `}
    />
  </div>
  </>
  );
}