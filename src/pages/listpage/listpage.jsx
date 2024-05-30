import { useLoaderData } from "react-router-dom";
import Card from "../../components/UI/card/Card";
import Filter from "../../components/UI/filter/Filter";
import Map from "../../components/UI/map/Map";
// import { listData } from "../../lib/data";
import styles from "./listpage.module.scss";

const Listpage = () => {
  // const data = listData;
  const posts = useLoaderData();
  return (
    <div className={styles.listpage}>
      <div className={styles.listContainer}>
        <div className={styles.wrapper}>
          <Filter />
          {posts.map((item) => (
            <div key={item.id} className={styles.item}>
              <Card key={item.id} item={item} />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.mapContainer}>
        <Map items={posts} />
      </div>
    </div>
  );
};

export default Listpage;
