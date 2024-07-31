import { useEffect, useState } from "react";
import styles from "./fooddetails.module.css";
import ItemList from "./ItemList";

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "ed8307d368c34b4380273f224d213688";
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div>
      <div className={styles.recipeCard}>
        <div className={styles.recipeName}>
          <h1> {food.title}</h1>

          <img className={styles.recipeImage} src={food.image} alt=""></img>
        </div>
        <div className={styles.recipeDetails}>
          <span>
            <strong> 👪 Serves {food.servings}</strong>
          </span>
          <span>
            <strong> 🕒 {food.readyInMinutes} Minutes </strong>{" "}
          </span>
          <span>
            <strong>
              {food.vegetarian ? "Vegetarian" : "none-vegetarian"}
            </strong>{" "}
          </span>

          <div>
            <span>
              <strong> {food.pricePerServing / 100}$ per Serving</strong>
            </span>
          </div>
        </div>
        <h2>Ingredients</h2>
        <ItemList food={food} isLoading={isLoading} />
        <h2 className={styles.recipeh2}> Instructions</h2>
        <div className={styles.recipeInstructions}>
          <ol>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li key={step.number}>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
