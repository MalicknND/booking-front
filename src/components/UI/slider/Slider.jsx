import { useState } from "react";
import styles from "./slider.module.scss";
import PropTypes from "prop-types";

const Slider = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(null);
  const changeSlide = (direction) => {
    if (direction === "left ") {
      setImageIndex(imageIndex === 0 ? images.length - 1 : imageIndex - 1);
    } else {
      setImageIndex(imageIndex === images.length - 1 ? 0 : imageIndex + 1);
    }
  };
  return (
    <div className={styles.slider}>
      {imageIndex !== null && (
        <div className={styles.fullSlider}>
          <div className={styles.arrow}>
            <img
              src="/images/arrow.png"
              alt="arrow"
              onClick={() => changeSlide("letf")}
            />
          </div>
          <div className={styles.imgContainer}>
            <img src={images[imageIndex]} alt="slider" />
          </div>
          <div className={styles.arrow}>
            <img
              src="/images/arrow.png"
              className={styles.right}
              alt="arrow"
              onClick={() => changeSlide("right")}
            />
          </div>
          <div onClick={() => setImageIndex(null)} className={styles.close}>
            X
          </div>
        </div>
      )}
      <div className={styles.bigImage}>
        <img src={images[0]} alt="images" onClick={() => setImageIndex(0)} />
      </div>
      <div className={styles.smallImages}>
        {images.slice(1).map((image, index) => (
          <img
            key={index}
            src={image}
            alt="images"
            onClick={() => setImageIndex(index + 1)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;

Slider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};
