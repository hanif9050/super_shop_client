import React, { useContext, useEffect, useState } from "react";

import "./Home.css";

import { Link } from "react-router-dom";
import { dataContext } from "../../App";
import spinner from "../Spinner/Spinner.gif";
const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [data, setData] = useContext(dataContext);
  // setData(fakeData);
  useEffect(() => {
    fetch("https://immense-eyrie-52740.herokuapp.com/allProducts")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
    setLoading(true);
  }, [products]);

  const handleBuyNow = () => {};
  return (
    <div className="container">
      {products.map((product) => {
        const { _id, name, price, imageUrl } = product;
        const userInfo = { ...product };

        // console.log("data", data);
        return (
          <div className="container-inside" key={_id}>
            <div className="card">
              <img className="product-img" src={imageUrl} alt="" />
              {!loading && <img src={spinner} />}

              <h3>{product.product}</h3>
              <div className="product-info">
                <h5>Price ${product.price}</h5>
                <Link className="btn" to={`/checkOut/${_id}`}>
                  <button onClick={handleBuyNow}>Buy Now</button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
