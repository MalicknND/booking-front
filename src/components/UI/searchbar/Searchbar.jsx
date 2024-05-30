import { useState } from "react";
import styles from "./searchbar.module.scss";
import { Link } from "react-router-dom";

const types = ["buy", "rent"];

const Searchbar = () => {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: "",
    maxPrice: "",
  });

  // fonction pour changer le type de recherche
  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  // fonction pour gérer les changements dans les champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuery((prev) => ({ ...prev, [name]: value }));
  };

  // fonction pour gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(query);
    // Vous pouvez ajouter ici la logique pour traiter la soumission du formulaire
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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="location"
          placeholder="Ville de localisation"
          value={query.location}
          onChange={handleChange}
        />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={10000000}
          placeholder="Prix min"
          value={query.minPrice}
          onChange={handleChange}
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={10000000}
          placeholder="Prix max"
          value={query.maxPrice}
          onChange={handleChange}
        />
        <Link
          to={`/list?type=${query.type}&location=${query.location}&minPrice=${query.minPrice}&maxPrice=${query.maxPrice}`}
        >
          <button type="submit">
            <img src="/images/search.png" alt="search" />
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Searchbar;
