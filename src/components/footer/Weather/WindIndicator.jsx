import React from "react";
import { useContext } from 'react';
import { UserContext } from '../../../App';

export default function WindIndicator({ speed, degrees }) {
  const { language } = useContext(UserContext);

  const getDirectionName = (deg) => {
    const directions_en = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
    const directions_fr = ["N", "NE", "E", "SE", "S", "SO", "O", "NO"];
    const index = Math.round(deg / 45) % 8;
    return language==='fr' ? directions_fr[index] : directions_en[index];
  };

  function convertToKmh(metersPerSecond) {
    return Math.round(metersPerSecond * 3.6);
  }

  return (
    <div className="wind-indicator">
      <span className="wind-speed">{`${convertToKmh(speed)} km/h`}</span>
      <span className="wind-direction" style={{ transform: `rotate(${degrees-90}deg)` }}>←</span>
      <span className="direction-name">{getDirectionName(degrees)}</span>
    </div>
  );
}