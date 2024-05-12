import styles from "./layout.module.scss";
import Header from "../../components/partials/Header/Header";
import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

// Composant de mise en page générale
const Layout = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.navbar}>
        <Header />
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};

// Composant pour exiger l'authentification
const RequiredAuth = () => {
  const { currentUser } = useContext(AuthContext);
  return !currentUser ? (
    <Navigate to="/auth/login" />
  ) : (
    <div className={styles.layout}>
      <div className={styles.navbar}>
        <Header />
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};

export { Layout, RequiredAuth };
