import React, { useState } from "react";
import {
  Button,
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardBody,
  Row,
  Col,
  Badge,
} from "reactstrap";

import sandwich1 from "../assets/sandwich1.png";
import sandwich2 from "../assets/sandwich2.png";
import sandwich3 from "../assets/sandwich3.png";

export default function Classics({ availableIngredients, setKaskrout, setPrice }) {
  const [badges] = useState({
    mharhar: { label: "m7ar7ar", color: "danger" },
    ydawakh: { label: "ydawa5", color: "warning" },
    bnin: { label: "bnin", color: "info" },
  });

  const [menu] = useState([
    {
      name: "Kaskrout Fromage",
      pic: sandwich1,
      badges: [badges.ydawakh, badges.bnin],
      components: [
        availableIngredients[0],
        availableIngredients[2],
        availableIngredients[3],
        availableIngredients[4],
      ],
    },
    {
      name: "Kaskrout Escalope",
      pic: sandwich2,
      badges: [badges.mharhar, badges.ydawakh],
      components: [
        availableIngredients[0],
        availableIngredients[2],
        availableIngredients[4],
        availableIngredients[5],
      ],
    },
    {
      name: "Kaskrout royal",
      pic: sandwich3,
      badges: [badges.mharhar, badges.bnin],
      components: [
        availableIngredients[0],
        availableIngredients[1],
        availableIngredients[2],
        availableIngredients[3],
        availableIngredients[4],
        availableIngredients[5],
      ],
    },
  ]);

  const calculatePrice = (ing) => {
    let total = 1000
    ing.map(ingredient => total=total+ingredient.pr)
    setPrice(total)
  }

  const selectKaskrout = (ing) => {
        setKaskrout(ing)
        calculatePrice(ing)
    }

  return (
      <React.Fragment>
      <h3>Our classics</h3>
    <Row>
      {menu.map((element) => (
        <Col xs="4">
          <Card>
            <CardImg top width="100%" src={element.pic} alt="Card image cap" />
            <CardBody>
              <CardTitle>
                <div>{element.name}</div>
                {element.badges.map(badge => <Badge style={{ marginRight: 4}} color={badge.color}>{badge.label}</Badge>
                )}
               
              </CardTitle>
                <CardText>Ingredients:{" "}{element.components.map(component => component.label + ", ")} </CardText>
              <Button color="primary" block onClick={() => selectKaskrout(element.components)}>Select</Button>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Row>
    </React.Fragment>
  );
}
