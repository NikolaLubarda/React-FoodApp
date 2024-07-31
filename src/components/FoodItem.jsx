import styles from "./foodItem.module.css";

export default function FoodItem({ food, setFoodId }) {
  function handleClick() {
    console.log(food.id);
    setFoodId(food.id);
  }
  return (
    <div className={styles.itemContainer}>
      <img className={styles.itemImage} src={food.image} alt="" />
      <div className={styles.itemContent}>
        <p className={styles.itemName}>{food.title} </p>
      </div>
      <div className={styles.buttonContainer}>
        <button onClick={handleClick} className={styles.itemButton}>
          View recipe
        </button>{" "}
      </div>
    </div>
  );
}
