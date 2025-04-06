import { useContext } from 'react';
import { UserContext } from '../../App';
import { Link } from 'react-router-dom';

export default function BookNow() {
  const { language } = useContext(UserContext);

  return (
  <Link to="/bookings"
    className="active">
    <button type="submit" className="btn btn-primary btn-primary-branded">
      { language === "en" ? "Book now" : "Réservez maintenant" }
    </button>
  </Link>
  );
}