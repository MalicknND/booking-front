import { listData } from "../../../lib/data";
import styles from "./list.module.scss";
import Card from "../card/Card";
const List = () => {
  return (
    <div className={styles.list}>
      {listData.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default List;
