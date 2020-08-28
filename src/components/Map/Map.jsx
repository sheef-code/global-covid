import React from "react";
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import { showDataOnMap } from "../../util/util";
import "leaflet/dist/leaflet.css";
import "./Map.styles.css";

const Map = ({ countries, casesType, center, zoom }) => {
  return (
    <div className="map">
      <LeafletMap center={center} zoom={zoom} style={{ width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {showDataOnMap(countries, casesType)}
      </LeafletMap>
    </div>
  );
};

export default Map;
