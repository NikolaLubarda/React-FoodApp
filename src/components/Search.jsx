import { useEffect, useState } from "react";
import styles from "./search.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "ed8307d368c34b4380273f224d213688";

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("Pasta");

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY} `);
      const data = await res.json();
      console.log(data.results);
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);

  function handleChange(e) {
    setQuery(e.target.value);
  }
  return (
    <div className={styles.searchContainer}>
      {" "}
      <input
        className={styles.input}
        type="text"
        onChange={handleChange}
        value={query}
      />
    </div>
  );
}
