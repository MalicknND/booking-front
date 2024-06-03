import { useSearchParams } from "react-router-dom";
import styles from "./filter.module.scss";
import { useState } from "react";

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Initialize the state with the search parameters
  const [query, setQuery] = useState({
    type: searchParams.get("type") || "",
    city: searchParams.get("city") || "",
    property: searchParams.get("property") || "",
    minPrice: searchParams.get("minPrice") || 0,
    maxPrice: searchParams.get("maxPrice") || 10000000,
    bedroom: searchParams.get("bedroom") || 1,
  });

  console.log(query.city);

  // Handle input changes and update the state
  const handleChange = (e) => {
    setQuery({ ...query, [e.target.name]: e.target.value });
  };

  // Update the search parameters in the URL
  const handleFilter = () => {
    const params = new URLSearchParams(query);
    setSearchParams(params);
  };

  return (
    <div className={styles.filter}>
      <h1>
        Recherche pour <b>{searchParams.get("city") || "toutes les villes"}</b>
      </h1>
      <div className={styles.top}>
        <div className={styles.item}>
          <label htmlFor="city">Location</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="Localisation de la ville"
            onChange={handleChange}
            defaultValue={query.city}
          />
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.item}>
          <label htmlFor="type">Type</label>
          <select
            name="type"
            id="type"
            defaultValue={query.type}
            onChange={handleChange}
          >
            <option value="">choisir</option>
            <option value="buy">Vendre</option>
            <option value="rent">Louer</option>
          </select>
        </div>
        <div className={styles.item}>
          <label htmlFor="property">Propriété</label>
          <select
            name="property"
            id="property"
            defaultValue={query.property}
            onChange={handleChange}
          >
            <option value="">choisir</option>
            <option value="apartment">Appartement</option>
            <option value="house">Maison</option>
            <option value="condo">Collocation</option>
            <option value="land">Terrain</option>
          </select>
        </div>
        <div className={styles.item}>
          <label htmlFor="minPrice">Min Price</label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            placeholder="minPrice"
            defaultValue={query.minPrice}
            onChange={handleChange}
          />
        </div>
        <div className={styles.item}>
          <label htmlFor="maxPrice">Max Price</label>
          <input
            type="number"
            id="maxPrice"
            name="maxPrice"
            placeholder="maxPrice"
            defaultValue={query.maxPrice}
            onChange={handleChange}
          />
        </div>
        <div className={styles.item}>
          <label htmlFor="bedroom">Bedrooms</label>
          <input
            type="text"
            id="bedroom"
            name="bedroom"
            placeholder="bedroom"
            defaultValue={query.bedroom}
            onChange={handleChange}
          />
        </div>
        <button onClick={handleFilter}>
          <img src="/images/search.png" alt="search" />
        </button>
      </div>
    </div>
  );
};

export default Filter;
