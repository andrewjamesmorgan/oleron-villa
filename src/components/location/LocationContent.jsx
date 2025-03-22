import LocationIntro from './LocationIntro';
import LocationMap from './LocationMap';
import BookNow from '../buttons/BookNow';

export default function LocationContent() {

  return (
    <div className='space-above'>
      <LocationIntro />
      <LocationMap />
      <BookNow />
    </div>
  );
}

