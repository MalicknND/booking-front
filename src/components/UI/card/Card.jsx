import PropTypes from "prop-types";
import styles from "./card.module.scss";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <div className={styles.card}>
      <Link to={`/list/${item.id}`} className={styles.imgContainer}>
        <img src={item.img} alt="" />
      </Link>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>
          <Link to={`/list/${item.id}`}>{item.title}</Link>
        </h2>
        <p className={styles.address}>
          <img src="/images/pin.png" alt="" />
          <span>{item.address}</span>
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
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    bedroom: PropTypes.number.isRequired,
    bathroom: PropTypes.number.isRequired,
  }).isRequired,
};

export default Card;
