import { Suspense, useContext } from "react";
import Chat from "../../../components/UI/chat/Chat";
import List from "../../../components/UI/list/List";
import styles from "./profile.module.scss";
import { AuthContext } from "../../../context/AuthContext";
import { Await, Link, useLoaderData } from "react-router-dom";
import Loader from "../../../components/UI/Loader/Loader";

const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  const data = useLoaderData();
  console.log(data.postResponse.data);
  return (
    <div className={styles.profile}>
      <div className={styles.details}>
        <div className={styles.wrapper}>
          <div className={styles.title}>
            <h2>User Information</h2>
            <Link to="/account/profile/update">
              <button>Modifier</button>
            </Link>
          </div>
          <div className={styles.info}>
            <span>
              Avatar :{" "}
              <img
                src={currentUser.avatar || "/images/noavatar.jpg"}
                alt="user"
              />
            </span>
            <span>
              Username : <b>{currentUser.username}</b>
            </span>
            <span>
              Email : <b>{currentUser.email}</b>
            </span>
          </div>
          <div className={styles.title}>
            <h2>Mes Appartements</h2>
            <Link to="/account/profile/create-post">
              <button>Ajouter</button>
            </Link>
          </div>
          <Suspense fallback={<Loader />}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error loading posts !</p>}
            >
              {(postResponse) => <List posts={postResponse.data.userPosts} />}
            </Await>
          </Suspense>
          <div className={styles.title}>
            <h2>Sauvegardés</h2>
          </div>
          <Suspense fallback={<Loader />}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error loading posts !</p>}
            >
              {(postResponse) => <List posts={postResponse.data.savedPosts} />}
            </Await>
          </Suspense>
        </div>
      </div>

      <div className={styles.chatContainer}>
        <div className={styles.wrapper}>
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default Profile;
