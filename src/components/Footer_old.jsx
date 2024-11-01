import FooterContact from './footer/FooterContact';
import FooterWeather from './footer/Weather/FooterWeather';

export default function Footer() {
  return (
    <div className="space-above" id="footer">
      <div className='responsive-grid footer-grid'>
        <FooterWeather/>
        <FooterContact/>
      </div>
    </div>
  );
}
