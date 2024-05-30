import { MapContainer, TileLayer } from "react-leaflet";
import PropTypes from "prop-types";
import "leaflet/dist/leaflet.css";
import styles from "./map.module.scss";
import Pin from "../pin/Pin";

const Map = ({ items }) => {
  return (
    <MapContainer
      className={styles.map}
      center={
        items.length === 1
          ? [Number(items[0].latitude), Number(items[0].longitude)]
          : [52.4797, -1.90269]
      }
      zoom={7}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {items.map((item) => {
        const id = Number(item.id);
        const latitude = Number(item.latitude);
        const longitude = Number(item.longitude);

        return (
          <Pin
            key={
              !isNaN(id) ? id : `${item.id}_${item.latitude}_${item.longitude}`
            }
            item={{
              ...item,
              id: isNaN(id) ? 0 : id,
              latitude: isNaN(latitude) ? 0 : latitude,
              longitude: isNaN(longitude) ? 0 : longitude,
            }}
          />
        );
      })}
    </MapContainer>
  );
};

Map.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      latitude: PropTypes.string.isRequired,
      longitude: PropTypes.string.isRequired,
      img: PropTypes.string,
      title: PropTypes.string,
      bedroom: PropTypes.number,
      price: PropTypes.number,
    })
  ).isRequired,
};

export default Map;
