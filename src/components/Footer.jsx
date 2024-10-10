// import { useContext } from 'react';
// import { UserContext } from '../App';
import FooterContact from './footer/FooterContact';

export default function Footer() {
  // const { language } = useContext(UserContext);
  
  return (
    <div className="space-above" id="footer">
      <div className='responsive-grid'>
        <FooterContact/>
        <FooterContact/>
      </div>
    </div>
  );
}
