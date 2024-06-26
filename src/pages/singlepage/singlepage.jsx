import Slider from "../../components/UI/slider/Slider";
import styles from "./singlepage.module.scss";
import Map from "../../components/UI/map/Map";
import { useLoaderData, useNavigate } from "react-router-dom";
import DOMPurify from "dompurify";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";

const Singlepage = () => {
  const navigate = useNavigate();
  const post = useLoaderData();
  console.log(post);

  const { currentUser } = useContext(AuthContext);
  const [saved, setSaved] = useState(post.isSaved);

  // Convertir les champs nécessaires en nombres
  const convertedPost = {
    ...post,
    id: post.id,
    latitude: Number(post.latitude),
    longitude: Number(post.longitude),
    postDetail: {
      ...post.postDetail,
      school: Number(post.postDetail.school),
      bus: Number(post.postDetail.bus),
      restaurant: Number(post.postDetail.restaurant),
    },
    user: {
      ...post.user,
      avatar: post.user.avatar,
    },
  };

  const handleSave = async () => {
    setSaved((prev) => !prev);
    if (!currentUser) {
      navigate("/auth/login");
    }
    try {
      await apiRequest.post("/user/save", { postId: post.id });
    } catch (error) {
      console.log(error);
      setSaved((prev) => !prev);
    }
  };

  return (
    <div className={styles.singlepage}>
      <div className={styles.details}>
        <div className={styles.wrapper}>
          <Slider images={convertedPost.images} />
          <div className={styles.info}>
            <div className={styles.top}>
              <div className={styles.post}>
                <h2>{convertedPost.title}</h2>
                <div className={styles.address}>
                  <img src="/images/pin.png" alt="icon" />
                  <span>{convertedPost.address}</span>
                </div>
                <div className={styles.price}>{convertedPost.price} €</div>
              </div>
              <div className={styles.user}>
                <img src={convertedPost.user.avatar} alt="icon" />
                <span>{convertedPost.user.username}</span>
              </div>
            </div>
            <div
              className={styles.bottom}
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  convertedPost.postDetail.description
                ),
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
                <span>Utilitaires</span>
                {convertedPost.postDetail.utilities === "owner" ? (
                  <p>Le propriétaire est responsable</p>
                ) : (
                  <p>Le locataire est responsable</p>
                )}
              </div>
            </div>
            <div className={styles.feature}>
              <img src="/images/pet.png" alt="icon" />
              <div className={styles.featureText}>
                <span>Animal de compagnie</span>
                {convertedPost.postDetail.pet === "allowed" ? (
                  <p>Autorisé</p>
                ) : (
                  <p>Non Autorisé</p>
                )}
              </div>
            </div>
            <div className={styles.feature}>
              <img src="/images/fee.png" alt="icon" />
              <div className={styles.featureText}>
                <span>Revenu</span>
                <p>{convertedPost.postDetail.income}</p>
              </div>
            </div>
          </div>
          <p className={styles.title}>Tailles</p>
          <div className={styles.sizes}>
            <div className={styles.size}>
              <img src="/images/size.png" alt="icon" />
              <span>{convertedPost.postDetail.size}</span>
            </div>
            <div className={styles.size}>
              <img src="/images/bed.png" alt="icon" />
              <span>{convertedPost.bedroom} Chambres</span>
            </div>
            <div className={styles.size}>
              <img src="/images/bath.png" alt="icon" />
              <span>{convertedPost.bathroom} Salle de bain</span>
            </div>
          </div>
          <p className={styles.title}>Lieux à proximité</p>
          <div className={styles.row}>
            <div className={styles.feature}>
              <img src="/images/school.png" alt="icon" />
              <div className={styles.featureText}>
                <span>Ecoles</span>
                <p>{convertedPost.postDetail.school}m </p>
              </div>
            </div>
            <div className={styles.feature}>
              <img src="/images/bus.png" alt="icon" />
              <div className={styles.featureText}>
                <span>Arrêt bus</span>
                <p>{convertedPost.postDetail.bus}m </p>
              </div>
            </div>
            <div className={styles.feature}>
              <img src="/images/restaurant.png" alt="icon" />
              <div className={styles.featureText}>
                <span>Restaurant</span>
                <p>
                  {convertedPost.postDetail.restaurant > 999
                    ? convertedPost.postDetail.restaurant / 1000 + "km"
                    : convertedPost.postDetail.restaurant + "m"}{" "}
                </p>
              </div>
            </div>
          </div>
          <p className={styles.title}>Location</p>
          <div className={styles.mapContainer}>
            <Map items={[convertedPost]} />
          </div>
          <div className={styles.buttons}>
            <button className={styles.button}>
              <img src="/images/chat.png" alt="icon" />
              Message
            </button>
            <button
              onClick={handleSave}
              className={styles.button}
              style={{
                backgroundColor: saved ? "#fece51" : "white",
              }}
            >
              <img src="/images/save.png" alt="icon" />
              {saved ? "sauvegardé" : "Sauvegarder"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singlepage;
