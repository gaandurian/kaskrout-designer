import React from "react";
import { Alert, Button } from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PriceCounter = (props) => {
  const placeOrder = () => {
    toast.success('Success you order was successfuly placed, total price is ' + props.price)
  }
  return (
    <>
      <Alert style={{ display: "inline-block" }} color="info">
        Total price: {props.price}{" "}
      </Alert>{" "}
      <Button onClick={placeOrder} size="lg" color="danger" on>
        Place order
      </Button>
      <ToastContainer position="bottom-right"/>
    </>
  );
};

export default PriceCounter;
