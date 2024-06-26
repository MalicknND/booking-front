import { useContext, useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";

const Header = () => {
  const [open, setOpen] = useState(false);

  const { currentUser, logout } = useContext(AuthContext);

  //  au click sur le body setOpen to false

  return (
    <header>
      <nav>
        <div className="left">
          <Link to="/" className="logo">
            <img src="/images/logo.png" alt="logo" />
            <span>Booking</span>
          </Link>

          {/* <Link to="/about">A propos</Link> */}
          <Link to="/list">List</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="right">
          {currentUser ? (
            <div className="user">
              <img src={currentUser.avatar || "/images/noavatar.jpg"} alt="" />
              <span>{currentUser.username}</span>
              <Link className="profile" to="/account/profile">
                <div className="notification">3</div>
                <span> Profil</span>
              </Link>
              <button onClick={() => logout()} className="logout">
                Déconnexion
              </button>
            </div>
          ) : (
            <>
              <Link to="/auth/login">Connexion</Link>
              <Link to="/auth/register" className="register">
                S&apos;enregistrer
              </Link>
            </>
          )}
          <div className="menuIcon">
            <img
              src={open ? "/images/close.png" : "/images/menu.png"}
              alt="menu"
              onClick={() => setOpen(!open)}
            />
          </div>
          <div
            onClick={() => setOpen(false)}
            className={open ? "menu active" : "menu"}
          >
            {currentUser ? (
              <>
                {/* <Link to="/about">A propos</Link> */}
                <Link to="/list">List</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/account/profile">Profil</Link>
                <Link className="register">
                  <button onClick={() => logout()} className="logout">
                    <span>Déconnexion</span>
                  </button>
                </Link>
              </>
            ) : (
              <>
                {/* <Link to="/about">A propos</Link> */}
                <Link to="/list">List</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/auth/login">Connexion</Link>
                <Link to="/auth/register" className="register">
                  S&apos;enregistrer
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
