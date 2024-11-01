// import { useContext } from 'react';
// import { UserContext } from '../App';
import LocationHead from '../components/location/LocationHead';
import LocationContent from '../components/location/LocationContent';

export default function Location() {
  // const { language } = useContext(UserContext);
  
  return (
    <>
      <LocationHead />
      <LocationContent />
    </>
  );
}