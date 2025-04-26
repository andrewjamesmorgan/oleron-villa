import { useState, useEffect } from 'react';
import InsideHouseCell from './homeGrid/InsideHouseCell';
import OutsideHouseCell from './homeGrid/OutsideHouseCell';
import LocationCell from './homeGrid/LocationCell';
import FacilitiesCell from './homeGrid/FacilitiesCell';
import BookingCell from './homeGrid/BookingCell';
import ContactCell from './homeGrid/ContactCell';
import StayCell from './homeGrid/StayCell';

export default function HomeGrid({action}) {
  const [olTenant] = useState(localStorage.getItem("tg-tenant"));
  const [isTenant, setIsTenant] = useState(false);
  
  useEffect(() => {
    setIsTenant(olTenant === "true");
  }, [olTenant]);

  return (
    <>
    <div className='responsive-grid'>
      <InsideHouseCell action={action} />
      <OutsideHouseCell action={action} />
      <FacilitiesCell action={action} />
    </div>
    <div className='responsive-grid'>
      {isTenant && <StayCell action={action} />}
      <LocationCell action={action} />
      <BookingCell action={action} />
      <ContactCell action={action} />
  </div>
  </>
  );
}