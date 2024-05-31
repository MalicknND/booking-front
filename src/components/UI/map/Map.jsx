import { MapContainer, TileLayer } from "react-leaflet";
import PropTypes from "prop-types"; // Importez PropTypes depuis la bibliothèque prop-types
import "leaflet/dist/leaflet.css";
import styles from "./map.module.scss";
import Pin from "../pin/Pin";

function Map({ items }) {
  return (
    <MapContainer
      center={
        items.length === 1
          ? [items[0].latitude, items[0].longitude]
          : [51.505, -0.09]
      }
      zoom={7}
      scrollWheelZoom={false}
      className={styles.map}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {items.map((item) => (
        <Pin item={item} key={item.id} />
      ))}
    </MapContainer>
  );
}

// Ajoutez la validation des props avec PropTypes
Map.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      latitude: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
        .isRequired,
      longitude: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
        .isRequired,
      img: PropTypes.string,
      title: PropTypes.string,
      bedroom: PropTypes.number,
      price: PropTypes.number,
    })
  ).isRequired,
};

export default Map;
