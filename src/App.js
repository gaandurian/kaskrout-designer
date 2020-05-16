import React, { useState } from "react";
import "./App.css";
import Kaskrout from "./components/Kaskrout";
import PriceCounter from "./components/PriceCounter";
import Ingredients from "./components/Ingredients";
import Classics from "./components/Classics";

import {
  Navbar,
  NavLink,
  Nav,
  NavItem,
  NavbarBrand,
  Row,
  Col,
} from "reactstrap";

import harissa from "./assets/1x/harissa.png";
import tmatem from "./assets/1x/tmatem.png";
import fromage from "./assets/1x/fromage.png";
import aadhma from "./assets/1x/aadhma.png";
import mayo from "./assets/1x/mayo.png";
import escalope from "./assets/1x/escalope.png";
import logo from './assets/logo.png'

// each component has its state
// state is an object
// useState is a react hook that allows us to update the state

function App() {
  const [availableIngredients] = useState([
    { label: "Harissa", pic: harissa, pr: 300 },
    { label: "3adhma", pic: aadhma, pr: 450 },
    { label: "Mayonnaise", pic: mayo, pr: 400 },
    { label: "Salami", pic: tmatem, pr: 500 },
    { label: "Fromage", pic: fromage, pr: 600 },
    { label: "Escalope", pic: escalope, pr: 800 },
  ]);
  const [kaskroutArray, setKaskrout] = useState([]);
  const [price, setPrice] = useState(1000);

  // Arrow function
  const add_to_kaskrout_parent = (ing) => {
    let tempArray = kaskroutArray;
    tempArray.unshift(ing);
    setKaskrout(Array.from(tempArray));
    setPrice(price + ing.pr);
  };

  return (
    <React.Fragment>
      <Navbar color="light" light expand="md">
        <NavbarBrand style={{marginLeft: 60}} href="/"><img style={{width: 120}} src={logo} /></NavbarBrand>
        <Nav style={{marginLeft: 30}} className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/components/">Home</NavLink>
          </NavItem>
        </Nav>
      </Navbar>

      <div style={{ padding: 40 }}>
        <Row>
          <Col xs="6">
            <Classics
              availableIngredients={availableIngredients}
              setKaskrout={setKaskrout}
              setPrice={setPrice}
            />
            <Ingredients
              availableIngredients={availableIngredients}
              add_to_kaskrout_child={add_to_kaskrout_parent}
            />
            <PriceCounter price={price} />
          </Col>
          <Col xs="6">
            <Kaskrout kaskroutArray={kaskroutArray} setPrice={setPrice} setKaskrout={setKaskrout} />
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
}

export default App;
