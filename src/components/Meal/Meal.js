import React from "react";
import "./Meal.css";

const Meal = (props) => {
  const { strInstructions, strMeal, strMealThumb } = props.meal;
  return (
    <div className="meal">
      <img src={strMealThumb} alt="  " />
      <h4>{strMeal}</h4>
      <p>{strInstructions.slice(0, 100)}</p>
      <button>Show Details</button>
    </div>
  );
};

export default Meal;
