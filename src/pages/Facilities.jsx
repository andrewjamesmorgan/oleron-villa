// import { useContext } from 'react';
// import { UserContext } from '../App';
import FacilitiesHead from '../components/facilities/FacilitiesHead';
import FacilitiesContent from '../components/facilities/FacilitiesContent';

export default function Facilities() {
  // const { language } = useContext(UserContext);
  
  return (
    <>
      <FacilitiesHead />
      <FacilitiesContent />
    </>
  );
}