import { useState } from "react";
import styles from "./searchbar.module.scss";

const types = ["vendre", "louer"];

const Searchbar = () => {
  const [query, setQuery] = useState({
    type: "vendre",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  // fonction pour changer le type de recherche
  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  return (
    <div className={styles.searchbar}>
      <div className={styles.type}>
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={`${query.type === type ? styles.active : ""}`}
          >
            {type}
          </button>
        ))}
      </div>
      <form>
        <input
          type="text"
          name="location"
          placeholder="Ville de localisation"
        />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={10000000}
          placeholder="Prix min"
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={10000000}
          placeholder="Prix max"
        />
        <button>
          <img src="/images/search.png" alt="search" />
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
