import React from "react";
import bread_up from "../assets/1x/khobz_up.png";
import bread_down from "../assets/1x/khobz_down.png";
import { Button } from 'reactstrap'

const Kaskrout = (props) => {
  const kaskroutStyles = {
    textAlign: "center",
    marginBottom: 40,
    color: "#535f73",
  };

  const resetKaskrout = () => {
    props.setKaskrout([])
    props.setPrice(1000)
  }
  return (
    <>
      <h2 style={kaskroutStyles}>Your kaskrout <Button onClick={resetKaskrout} color="warning">Reset</Button></h2>
      <ul className="kaskrout">
        <li>
          <img alt="khobz up" src={bread_up} />
        </li>
        {props.kaskroutArray.map((el) => (
          <li>
            <img alt="food" src={el.pic} />
          </li>
        ))}
        <li>
          <img alt="khobz down" src={bread_down} />
        </li>
      </ul>
    </>
  );
};

export default Kaskrout;
