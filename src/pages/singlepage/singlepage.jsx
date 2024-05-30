import Slider from "../../components/UI/slider/Slider";
import styles from "./singlepage.module.scss";
// import { singlePostData, userData } from "../../lib/data";
import Map from "../../components/UI/map/Map";
import { useLoaderData } from "react-router-dom";
import DOMPurify from "dompurify";

const Singlepage = () => {
  const post = useLoaderData();
  console.log(post);
  return (
    <div className={styles.singlepage}>
      <div className={styles.details}>
        <div className={styles.wrapper}>
          <Slider images={post.images} />
          <div className={styles.info}>
            <div className={styles.top}>
              <div className={styles.post}>
                <h2>{post.title}</h2>
                <div className={styles.address}>
                  <img src="/images/pin.png" alt="icon" />
                  <span>{post.address}</span>
                </div>
                <div className={styles.price}>{post.price} €</div>
              </div>
              <div className={styles.user}>
                <img src={post.user.avatar} alt="icon" />
                <span>{post.user.username}</span>
              </div>
            </div>
            <div
              className={styles.bottom}
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(post.postDetail.description),
              }}
            ></div>
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
                {post.postDetail.utilities === "owner"
                  ? "Owner is responsible"
                  : "Tenant is responsible"}
              </div>
            </div>
            <div className={styles.feature}>
              <img src="/images/pet.png" alt="icon" />
              <div className={styles.featureText}>
                <span>Pet Policy</span>
                {post.postDetail.pet === "allowed" ? (
                  <p>Allowed</p>
                ) : (
                  <p>Not Allowed</p>
                )}
              </div>
            </div>
            <div className={styles.feature}>
              <img src="/images/fee.png" alt="icon" />
              <div className={styles.featureText}>
                <span>Income Policy</span>
                <p>{post.postDetail.income}</p>
              </div>
            </div>
          </div>
          <p className={styles.title}>Sizes</p>
          <div className={styles.sizes}>
            <div className={styles.size}>
              <img src="/images/size.png" alt="icon" />
              <span>{post.postDetail.size}</span>
            </div>
            <div className={styles.size}>
              <img src="/images/bed.png" alt="icon" />
              <span>{post.bedroom} bedrooms</span>
            </div>
            <div className={styles.size}>
              <img src="/images/bath.png" alt="icon" />
              <span>{post.bathroom} bathroom</span>
            </div>
          </div>
          <p className={styles.title}>Nearby Places</p>
          <div className={styles.row}>
            <div className={styles.feature}>
              <img src="/images/school.png" alt="icon" />
              <div className={styles.featureText}>
                <span>School</span>
                <p>{post.postDetail.school}m away</p>
              </div>
            </div>
            <div className={styles.feature}>
              <img src="/images/bus.png" alt="icon" />
              <div className={styles.featureText}>
                <span>Bus Stop</span>
                <p>{post.postDetail.bus}m away</p>
              </div>
            </div>
            <div className={styles.feature}>
              <img src="/images/restaurant.png" alt="icon" />
              <div className={styles.featureText}>
                <span>Restaurant</span>
                <p>
                  {post.postDetail.restaurant > 999
                    ? post.postDetail.restaurant / 1000 + "km"
                    : post.postDetail.restaurant + "m"}{" "}
                  away
                </p>
              </div>
            </div>
          </div>
          <p className={styles.title}>Loaction</p>
          <div className={styles.mapContainer}>
            <Map items={[post]} />
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
