import React, { useEffect, useState } from "react";
import Meal from "../Meal/Meal";
import "./Restourants.css";

const Restaurants = () => {
  const [searchText, setSearchText] = useState("");
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, [searchText]);
  const handleSearchField = (event) => {
    const searchTextValue = event.target.value;
    setSearchText(searchTextValue);
  };
  return (
    <div>
      <div style={{ textAlign: "center", fontSize: "20px" }}>
        <input onChange={handleSearchField} type="text" placeholder="Search meals here" />
      </div>
      <div>
        <div className="meals">
          {meals.map((meal) => (
            <Meal key={meal.idMeal} meal={meal}></Meal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Restaurants;
