import { Helmet } from "react-helmet-async";
import Searchbar from "../../components/UI/searchbar/Searchbar";
import styles from "./hompage.module.scss";

const Homepage = () => {
  return (
    <div className={styles.homepage}>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className={styles.textContainer}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>
            Trouvez un bien immobilier et obtenez l&apos;endroit de vos rêves.
          </h1>
          <p>
            Notre plateforme vous offre une multitude d&apos;options pour
            trouver le bien immobilier parfait qui correspond à vos besoins et à
            vos rêves.
          </p>
          <Searchbar />
          <div className={styles.boxes}>
            <div className={styles.box}>
              <h2>+16</h2>
              <span>Années d&apos;expériences</span>
            </div>
            <div className={styles.box}>
              <h2>200</h2>
              <span>Récompense gagnée</span>
            </div>
            <div className={styles.box}>
              <h2>+1200</h2>
              <span>Propriétés prêtes</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <img src="/images/bg.png" alt="" />
      </div>
    </div>
  );
};

export default Homepage;
