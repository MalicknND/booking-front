import { Marker, Popup } from "react-leaflet";
import PropTypes from "prop-types"; // Importez PropTypes depuis la bibliothèque prop-types
import styles from "./pin.module.scss";
import { Link } from "react-router-dom";

// ce composant permet d'afficher les logements sur la carte

const Pin = ({ item }) => {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className={styles.popupContainer}>
          <img src={item.images[0]} alt="img" />
          <div className={styles.textContainer}>
            <Link to={`/list/${item.id}`}>{item.title}</Link>
            <span> {item.bedroom} bedroom </span>
            <b>{item.price} €</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

// Ajoutez la validation des props avec PropTypes
Pin.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    latitude: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
      .isRequired,
    longitude: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
      .isRequired,
    images: PropTypes.array,
    title: PropTypes.string,
    bedroom: PropTypes.number,
    price: PropTypes.number,
  }).isRequired,
};

export default Pin;
