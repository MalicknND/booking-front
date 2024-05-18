import styles from "./new.module.scss";
import UploadWidget from "../../components/UI/uploadWidget/UploadWidget";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import apiRequest from "../../lib/apiRequest";
import { useNavigate } from "react-router-dom";

const NewPostPage = () => {
  const [value, setValue] = useState("");
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const inputs = Object.fromEntries(formData);

    try {
      const res = await apiRequest.post("/post/new", {
        postData: {
          title: inputs.title,
          price: parseInt(inputs.price),
          address: inputs.address,
          city: inputs.city,
          bedroom: parseInt(inputs.bedroom),
          bathroom: parseInt(inputs.bathroom),
          type: inputs.type,
          property: inputs.property,
          latitude: inputs.latitude,
          longitude: inputs.longitude,
          images: images,
        },
        postDetail: {
          description: value,
          utilities: inputs.utilities,
          pet: inputs.pet,
          income: inputs.income,
          size: parseInt(inputs.size),
          school: parseInt(inputs.school),
          bus: parseInt(inputs.bus),
          restaurant: parseInt(inputs.restaurant),
        },
      });
      console.log(res);
      navigate("/list/" + res.data.id);
    } catch (err) {
      console.log(err);
      setError(err);
    }
  };
  return (
    <div className={styles.newPostPage}>
      <div className={styles.formContainer}>
        <h1>Add New Post</h1>
        <div className={styles.wrapper}>
          <form onSubmit={handleSubmit}>
            <div className={styles.item}>
              <label htmlFor="title">Titre</label>
              <input required id="title" name="title" type="text" />
            </div>
            <div className={styles.item}>
              <label htmlFor="price">Prix</label>
              <input required id="price" name="price" type="number" />
            </div>
            <div className={styles.item}>
              <label htmlFor="address">Adresse</label>
              <input required id="address" name="address" type="text" />
            </div>
            <div className={`${styles.item} ${styles.description} `}>
              <label htmlFor="description">Description</label>
              <ReactQuill theme="snow" onChange={setValue} value={value} />
            </div>
            <div className={styles.item}>
              <label htmlFor="city">Ville</label>
              <input required id="city" name="city" type="text" />
            </div>
            <div className={styles.item}>
              <label htmlFor="bedroom">Chambres</label>
              <input
                required
                min={1}
                id="bedroom"
                name="bedroom"
                type="number"
              />
            </div>
            <div className={styles.item}>
              <label htmlFor="bathroom">Salle de bain</label>
              <input
                required
                min={1}
                id="bathroom"
                name="bathroom"
                type="number"
              />
            </div>
            <div className={styles.item}>
              <label htmlFor="latitude">Latitude</label>
              <input id="latitude" name="latitude" type="text" />
            </div>
            <div className={styles.item}>
              <label htmlFor="longitude">Longitude</label>
              <input id="longitude" name="longitude" type="text" />
            </div>
            <div className={styles.item}>
              <label htmlFor="type">Type</label>
              <select name="type">
                <option value="rent" defaultChecked>
                  Louer
                </option>
                <option value="buy">Acheter</option>
              </select>
            </div>
            <div className={styles.item}>
              <label htmlFor="type">Property</label>
              <select name="property">
                <option value="apartment">Appartement</option>
                <option value="house">Maison</option>
                <option value="condo">Collocation</option>
                <option value="land">Terrain</option>
              </select>
            </div>

            <div className={styles.item}>
              <label htmlFor="utilities">Politique</label>
              <select name="utilities">
                <option value="owner">Le propriétaire est responsable</option>
                <option value="tenant">Le locataire est responsable</option>
                <option value="shared">Partagé</option>
              </select>
            </div>
            <div className={styles.item}>
              <label htmlFor="pet">Animal</label>
              <select name="pet">
                <option value="allowed">Autorisé</option>
                <option value="not-allowed">Non Autorisé</option>
              </select>
            </div>
            <div className={styles.item}>
              <label htmlFor="income">Revenu</label>
              <input
                id="income"
                name="income"
                type="text"
                placeholder="Income Policy"
                required
              />
            </div>
            <div className={styles.item}>
              <label htmlFor="size">Surface</label>
              <input required min={0} id="size" name="size" type="number" />
            </div>
            <div className={styles.item}>
              <label htmlFor="school">École</label>
              <input required min={0} id="school" name="school" type="number" />
            </div>
            <div className={styles.item}>
              <label htmlFor="bus">Bus</label>
              <input required min={0} id="bus" name="bus" type="number" />
            </div>
            <div className={styles.item}>
              <label htmlFor="restaurant">Restaurant</label>
              <input
                required
                min={0}
                id="restaurant"
                name="restaurant"
                type="number"
              />
            </div>
            <button className={styles.sendButton}>Ajouter</button>
            {error && <span>error</span>}
          </form>
        </div>
      </div>
      <div className={styles.sideContainer}>
        {images.map((image, index) => (
          <img src={image} key={index} alt="image" />
        ))}
        <UploadWidget
          uwConfig={{
            multiple: true,
            cloudName: "dfiyskfz6",
            uploadPreset: "booking",
            folder: "posts",
          }}
          setState={setImages}
        />
      </div>
    </div>
  );
};

export default NewPostPage;
