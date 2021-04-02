import React, { useContext, useState } from "react";
import { userContext } from "../../App";
import "./Table.css";
const Table = ({ name, price }) => {
  const [loggedIn, setLoggedIn] = useContext(userContext);
  const [show, setShow] = useState(true);
  const handleCheckOut = () => {
    console.log("checkout");
    const userInfo = {
      email: loggedIn.email,

      product: name,
      price: price,
      time: new Date(),
    };
    fetch("https://immense-eyrie-52740.herokuapp.com/orderPlace", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
          setShow(false);
        }
      });
  };

  return (
    <React.Fragment>
      {show ? (
        <div className="table-main">
          <table className="table-container">
            <thead className="table-thead">
              <tr>
                <th>Description</th>

                <th>Quantity</th>

                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{name}</td>
                <td>1</td>
                <td>${price}</td>
              </tr>
            </tbody>
          </table>
          <button className="checkoutBtn" onClick={handleCheckOut}>
            Check Out
          </button>
        </div>
      ) : (
        <h1>Order Place Successfully. Thanks </h1>
      )}
    </React.Fragment>
  );
};

export default Table;
