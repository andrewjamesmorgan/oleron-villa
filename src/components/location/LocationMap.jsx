import {APIProvider, Map} from '@vis.gl/react-google-maps';
import LocationPoiMarkers from './LocationPoiMarkers';

const locations = [
  {key: 'oleronVilla', location: { lat: 45.87092056675535, lng: -1.2465387449637106 }},
];

export default function LocationMap() {

  return (
    <div >
      <APIProvider apiKey={'AIzaSyCG-djHC8ga5zInsGtoVlDb7tb_y-KUyGQ'}>
        <div className='map'>
          <Map
            defaultZoom={10}
            defaultCenter={ { lat: 45.87092056675535, lng: -1.2465387449637106 } }
            mapId='15019cba5d15b2ed'
          >
            <LocationPoiMarkers pois={locations} />
          </Map>
          </div>
      </APIProvider>
    </div>
  );
}

