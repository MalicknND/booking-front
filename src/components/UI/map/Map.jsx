import { MapContainer, TileLayer } from "react-leaflet";
import PropTypes from "prop-types"; // Importez PropTypes depuis la bibliothèque prop-types
import "leaflet/dist/leaflet.css";
import styles from "./map.module.scss";
import Pin from "../pin/Pin";

const Map = ({ items }) => {
  return (
    <MapContainer
      className={styles.map}
      center={[51.505, -0.09]}
      zoom={7}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {items.map((item) => (
        <Pin key={item.id} item={item} />
      ))}
    </MapContainer>
  );
};

// Ajoutez la validation des props avec PropTypes
Map.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      latitude: PropTypes.number,
      longitude: PropTypes.number,
      img: PropTypes.string,
      title: PropTypes.string,
      bedroom: PropTypes.number,
      price: PropTypes.number,
    })
  ).isRequired,
};

export default Map;
