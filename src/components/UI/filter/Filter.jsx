import styles from "./filter.module.scss";
const Filter = () => {
  return (
    <div className={styles.filter}>
      <h1>
        Search results for <b>Dakar</b>
      </h1>
      <div className={styles.top}>
        <div className={styles.item}>
          <label htmlFor="city">Location</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="Localisation de la ville"
          />
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.item}>
          <label htmlFor="type">Type</label>
          <select name="type" id="type">
            <option value="">choisir</option>
            <option value="buy">Vendre</option>
            <option value="rent">Louer</option>
          </select>
        </div>
        <div className={styles.item}>
          <label htmlFor="property">Propriété</label>
          <select name="property" id="property">
            <option value="">choisir</option>
            <option value="house">Maison</option>
            <option value="apartment">Appartement</option>
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
          />
        </div>
        <div className={styles.item}>
          <label htmlFor="maxPrice">Location</label>
          <input
            type="number"
            id="maxPrice"
            name="maxPrice"
            placeholder="maxPrice"
          />
        </div>
        <div className={styles.item}>
          <label htmlFor="bedroom">Location</label>
          <input
            type="text"
            id="bedroom"
            name="bedroom"
            placeholder="bedroom"
          />
        </div>
        <button>
          <img src="/images/search.png" alt="search" />
        </button>
      </div>
    </div>
  );
};

export default Filter;
