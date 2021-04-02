import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./CheckOut.css";
import Table from "../Table/Table";
const CheckOut = () => {
  const { id } = useParams();
  console.log("_id:", id);

  const [checkOut, setCheckOut] = useState([]);
  useEffect(() => {
    fetch(`https://immense-eyrie-52740.herokuapp.com/product/${id}`)
      .then((res) => res.json())
      .then((data) => setCheckOut(data));
  }, [id]);

  return (
    <div className="checkOut">
      <h1>Check Out</h1>
      <Table {...checkOut} />
    </div>
  );
};

export default CheckOut;
