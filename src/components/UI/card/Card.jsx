import PropTypes from "prop-types";
import styles from "./card.module.scss";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  // Vérifiez si item et toutes les propriétés requises sont définies
  if (
    !item ||
    !item.images ||
    !item.title ||
    !item.city ||
    item.price == null ||
    item.bedroom == null ||
    item.bathroom == null
  ) {
    return (
      <div className={styles.card}>
        <p>Informations manquantes ou incorrectes</p>
      </div>
    );
  }

  return (
    <div className={styles.card}>
      <Link to={`/list/${item.id}`} className={styles.imgContainer}>
        <img src={item.images[0]} alt={item.title} />
      </Link>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>
          <Link to={`/list/${item.id}`}>{item.title}</Link>
        </h2>
        <p className={styles.address}>
          <img src="/images/pin.png" alt="Localisation" />
          <span>{item.city}</span>
        </p>
        <p className={styles.price}>
          <span>{item.price} €</span>
        </p>
        <div className={styles.bottom}>
          <div className={styles.features}>
            <div className={styles.feature}>
              <img src="/images/bed.png" alt="bed" />
              <span>{item.bedroom} bedroom</span>
            </div>
            <div className={styles.feature}>
              <img src="/images/bath.png" alt="bath" />
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>
          <div className={styles.icons}>
            <div className={styles.icon}>
              <img src="/images/save.png" alt="save" />
            </div>
            <div className={styles.icon}>
              <img src="/images/chat.png" alt="chat" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    images: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    bedroom: PropTypes.number.isRequired,
    bathroom: PropTypes.number.isRequired,
  }).isRequired,
};

export default Card;
