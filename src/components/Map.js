import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./Map.css";
import { divIcon } from "leaflet";
import "leaflet/dist/leaflet.css";
import data from "./usage.json";

const Map = () => {
  const position = [20.593683, 78.962883];
  return (
    <MapContainer center={position} zoom={3} className="map">
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        minZoom={2}
        noWrap={true}
        scrollWheelZoom={false}
      />

      {data.map((d, index) => {
        var legendcolor;
        if (d.usage < 500) legendcolor = "183,230,255";
        else if (d.usage >= 500 && d.usage < 1000) legendcolor = "104,183,255";
        else if (d.usage >= 1000 && d.usage < 5000) legendcolor = "60,115,255";
        else if (d.usage >= 5000) legendcolor = "44,38,182";

        var radius = Math.max(5, d.usage / 100);
        const customIcon = divIcon({
          className: "circle-icon",
          html: `<div style="width:${radius}px; height:${radius}px; border-radius:50%; background-color: rgba(${legendcolor}, 0.5);border:3px solid rgba(${legendcolor}, 1)"></div>`,
        });

        return (
          <Marker key={index} position={d.gcode} icon={customIcon}>
            <Popup>Usage:{d.usage}$</Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default Map;
