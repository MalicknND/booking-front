import Slider from "../../components/UI/slider/Slider";
import styles from "./singlepage.module.scss";
import { singlePostData, userData } from "../../lib/data";
import Map from "../../components/UI/map/Map";

const Singlepage = () => {
  return (
    <div className={styles.singlepage}>
      <div className={styles.details}>
        <div className={styles.wrapper}>
          <Slider images={singlePostData.images} />
          <div className={styles.info}>
            <div className={styles.top}>
              <div className={styles.post}>
                <h2>{singlePostData.title}</h2>
                <div className={styles.address}>
                  <img src="/images/pin.png" alt="icon" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className={styles.price}>{singlePostData.price} €</div>
              </div>
              <div className={styles.user}>
                <img src={userData.img} alt="icon" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className={styles.bottom}>{singlePostData.description}</div>
          </div>
        </div>
      </div>
      <div className={styles.features}>
        <div className={styles.wrapper}>
          <p className={styles.title}>General</p>
          <div className={styles.column}>
            <div className={styles.feature}>
              <img src="/images/utility.png" alt="icon" />
              <div className={styles.featureText}>
                <span>Utilities</span>
                <p>Renter is responsible</p>
              </div>
            </div>
            <div className={styles.feature}>
              <img src="/images/pet.png" alt="icon" />
              <div className={styles.featureText}>
                <span>Pet Policy</span>
                <p>Pets Allowed</p>
              </div>
            </div>
            <div className={styles.feature}>
              <img src="/images/fee.png" alt="icon" />
              <div className={styles.featureText}>
                <span>Property Fees</span>
                <p>Must have 3x the rent in total household income</p>
              </div>
            </div>
          </div>
          <p className={styles.title}>Sizes</p>
          <div className={styles.sizes}>
            <div className={styles.size}>
              <img src="/images/size.png" alt="icon" />
              <span>80</span>
            </div>
            <div className={styles.size}>
              <img src="/images/bed.png" alt="icon" />
              <span>2 bedroom</span>
            </div>
            <div className={styles.size}>
              <img src="/images/bath.png" alt="icon" />
              <span>1 bathroom</span>
            </div>
          </div>
          <p className={styles.title}>Nearby Places</p>
          <div className={styles.row}>
            <div className={styles.feature}>
              <img src="/images/school.png" alt="icon" />
              <div className={styles.featureText}>
                <span>School</span>
                <p>250m away</p>
              </div>
            </div>
            <div className={styles.feature}>
              <img src="/images/bus.png" alt="icon" />
              <div className={styles.featureText}>
                <span>Bus Stop</span>
                <p>100m away</p>
              </div>
            </div>
            <div className={styles.feature}>
              <img src="/images/restaurant.png" alt="icon" />
              <div className={styles.featureText}>
                <span>Restaurant</span>
                <p>200m away</p>
              </div>
            </div>
          </div>
          <p className={styles.title}>Loaction</p>
          <div className={styles.mapContainer}>
            <Map items={[singlePostData]} />
          </div>
          <div className={styles.buttons}>
            <button className={styles.button}>
              <img src="/images/chat.png" alt="icon" />
              Message
            </button>
            <button className={styles.button}>
              <img src="/images/save.png" alt="icon" />
              Enregistrer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singlepage;
