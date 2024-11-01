// import { useContext } from 'react';
// import { UserContext } from '../App';
import OutsideHead from '../components/outside/OutsideHead';
import OutsideContent from '../components/outside/OutsideContent';

export default function OutsideHouse() {
  // const { language } = useContext(UserContext);
  
  return (
    <>
      <OutsideHead />
      <OutsideContent />
    </>
  );
}