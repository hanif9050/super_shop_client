import React, { useEffect, useState } from "react";
import "./AdminManageOrder.css";
const AdminManageOrder = ({ manage }) => {
  const [orders, setOrders] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    fetch("https://immense-eyrie-52740.herokuapp.com/allProducts")
      .then((res) => res.json())
      .then((data) => setOrders(data));
    console.log(orders);
  }, [refresh]);
  const handleDelete = (id) => {
    console.log(id);
    fetch(`https://immense-eyrie-52740.herokuapp.com/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        setRefresh(data);
      });
  };
  return (
    <div className="adminManageContainer">
      <div className="adminOrder adminAlign">
        <h1>Product</h1>
        <h1>Price</h1>

        <h1>Action</h1>
      </div>
      <div>
        {orders.map((order) => {
          return (
            <div className="adminOrder adminAlign" key={order._id}>
              <p>{order.name}</p>
              <p>{order.price}</p>

              <button
                className="adminDeleteBtn"
                onClick={() => handleDelete(order._id)}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminManageOrder;
