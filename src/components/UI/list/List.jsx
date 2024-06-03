import PropTypes from "prop-types";
import styles from "./list.module.scss";
import Card from "../card/Card";
const List = ({ posts }) => {
  return (
    <div className={styles.list}>
      {posts.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default List;

List.propTypes = {
  posts: PropTypes.array.isRequired,
};
