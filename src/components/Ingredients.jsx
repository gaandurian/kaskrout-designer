import React from "react";
import { Button } from 'reactstrap'

export default function Ingredients(props) {
  const { availableIngredients, add_to_kaskrout_child } = props;

  const ingredientStyles = {
    listStyle: "none",
    paddingLeft: 0
  };

  return (
    <div>
      <h3 style={{color: "#535f73", marginTop: 40}}>Available ingredients</h3>
      <ul style={ingredientStyles}>
        {availableIngredients.map((element) => (
          <li key={element.label} style={{ marginTop: 4, morginBottom: 4, display: "inline-block"}}>
            <Button style={{marginRight: 4}} onClick={() => add_to_kaskrout_child(element)} color="primary" size="lg" outline>+ {element.label}</Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
