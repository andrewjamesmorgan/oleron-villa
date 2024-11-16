import {AdvancedMarker, Pin} from '@vis.gl/react-google-maps';

export default function LocationPoiMarkers({pois}) {

  return (
    <>
      {pois.map( (poi) => (
        <AdvancedMarker
          key={poi.key}
          position={poi.location}>
          <Pin background={'var(--pin-color)'} glyphColor={'#000'} borderColor={'#000'} />
        </AdvancedMarker>
      ))}
    </>
  );
}

