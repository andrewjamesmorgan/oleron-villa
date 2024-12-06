import {APIProvider, Map} from '@vis.gl/react-google-maps';
import LocationPoiMarkers from './LocationPoiMarkers';
import { config } from '../../config';

const locations = [
  {key: 'oleronVilla', location: { lat: config.lat, lng: config.lon }},
];

export default function LocationMap() {

  return (
    <div >
      <APIProvider apiKey={'AIzaSyCG-djHC8ga5zInsGtoVlDb7tb_y-KUyGQ'}>
        <div className='map'>
          <Map
            defaultZoom={10}
            defaultCenter={ { lat: config.lat, lng: config.lon } }
            mapId={config.mapId}
          >
            <LocationPoiMarkers pois={locations} />
          </Map>
          </div>
      </APIProvider>
    </div>
  );
}

