import { Await, useLoaderData } from "react-router-dom";
import Card from "../../components/UI/card/Card";
import Filter from "../../components/UI/filter/Filter";
import Map from "../../components/UI/map/Map";
import styles from "./listpage.module.scss";
import { Suspense } from "react";
import Loader from "../../components/UI/Loader/Loader";

const Listpage = () => {
  const data = useLoaderData();
  return (
    <div className={styles.listpage}>
      <div className={styles.listContainer}>
        <div className={styles.wrapper}>
          <Filter />
          <Suspense fallback={<Loader />}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error loading posts !</p>}
            >
              {(postResponse) =>
                postResponse.data.map((post) => (
                  <Card key={post.id} item={post} />
                ))
              }
            </Await>
          </Suspense>
        </div>
      </div>
      <div className={styles.mapContainer}>
        <Suspense fallback={<div>Loading...</div>}>
          <Await
            resolve={data.postResponse}
            errorElement={<p>Error loading posts !</p>}
          >
            {(postResponse) => <Map items={postResponse.data} />}
          </Await>
        </Suspense>
      </div>
    </div>
  );
};

export default Listpage;

// {posts.map((item) => (
//   <div key={item.id} className={styles.item}>
//     <Card key={item.id.toString()} item={item} />
//   </div>
// ))}
