import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { dataContext, userContext } from "../../App";
import OrderTable from "../OrderTable/OrderTable";
import "./Order.css";

const Order = () => {
  const [loggedIn, setLoggedIn] = useContext(userContext);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(`https://immense-eyrie-52740.herokuapp.com/email/${loggedIn.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  console.log("email", loggedIn.email);

  return (
    <div className="orderContainer">
      {/* <h1>Product Name:{matchId.name}</h1> */}
      {/* <h1>Product Price:{matchId.price}</h1> */}
      <div className="listOrder listAlign">
        <h1 className="hidden">Order Id</h1>
        <h1>Product</h1>
        <h1>Price</h1>
        <h1>Email</h1>
        <h1 className="hidden">Time</h1>
      </div>
      <div>
        {orders.map((order) => {
          return (
            <div className="listOrder listAlign " key={order._id}>
              <p className="hidden">{order._id}</p>
              <p>{order.product}</p>

              <p>{order.price}</p>
              <p>{order.email}</p>
              <p className="hidden">{order.time}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Order;
