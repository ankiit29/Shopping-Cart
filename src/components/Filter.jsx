import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import Rating from "./Rating";
import { Cart } from "../context/Context";

const Filter = () => {
  const {
    productState: { byStock, byDelivery, byRating, sort },
    productDispatch,
  } = useContext(Cart);
  // console.log(byStock, byDelivery, byRating, sort);
  return (
    <div className="filters">
      <h5 className="title">Filter Products</h5>
      <span>
        <Form.Check
          inline
          label="Ascending"
          name="group1"
          type="radio"
          id={`inline-1`}
          onChange={() =>
            productDispatch({
              type: "SORT_BY_PRICE",
              payload: "lowToHigh",
            })
          }
          checked={sort === "lowToHigh" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Descending"
          name="group1"
          type="radio"
          id={`inline-2`}
          onChange={() =>
            productDispatch({
              type: "SORT_BY_PRICE",
              payload: "highToLow",
            })
          }
          checked={sort === "highToLow" ? true : false}
        />
      </span>

      <span>
        <Form.Check
          inline
          label="Include Out of Stock"
          name="group1"
          type="checkbox"
          id={`inline-3`}
          onChange={() =>
            productDispatch({
              type: "FILTER_BY_STOCK",
            })
          }
          checked={byStock}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Fast Delivery Only"
          name="group1"
          type="checkbox"
          id={`inline-4`}
          onChange={() =>
            productDispatch({
              type: "FILTER_BY_DELIVERY",
            })
          }
          checked={byDelivery}
        />
      </span>
      <span>
        <label style={{ paddingRight: 10 }}>Rating: </label>
        <Rating
          rating={byRating}
          onClick={(i) => {
            productDispatch({
              type: "FILTER_BY_RATING",
              payload: i + 1,
            });
          }}
          style={{ cursor: "pointer" }}
        />
      </span>
      <Button
        onClick={()=>productDispatch({
          type: "CLEAR_FILTERS",
        })}
      >
        Clear Filters
      </Button>
    </div>
  );
};

export default Filter;
