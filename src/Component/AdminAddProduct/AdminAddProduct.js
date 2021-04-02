import React, { useState } from "react";
import { useForm } from "react-hook-form";
import spinner from "../Spinner/Spinner.gif";
import "./AdminAddProduct.css";

const AdminAddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [productAdd, setProductAdd] = useState(false);
  const onSubmit = (data) => {
    const eventData = {
      name: data.productName,
      price: data.price,
      imageUrl: imageUrl,
    };
    console.log(eventData);
    fetch("https://immense-eyrie-52740.herokuapp.com/addProduct", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
          setProductAdd(true);
          reset();
        }
      });
  };

  const handleChange = (e) => {
    setLoading(true);
    console.log(e.target.files[0]);
    let data = new FormData();
    data.set("key", "bd3d22819ea1a2a3bb9aab5e5b34555f");
    data.append("image", e.target.files[0]);
    console.log("form", data);

    fetch("https://api.imgbb.com/1/upload", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setImageUrl(data.data.display_url);
        setLoading(false);
        console.log("imageUrl", data.data.display_url);
      });
  };
  setTimeout(() => {
    setProductAdd(false);
  }, 3000);
  return (
    <div className="addProductContainer">
      <h1>Add Product</h1>
      {productAdd && <h1>Product Added Successfully</h1>}
      <form onSubmit={handleSubmit(onSubmit)} className="addProductForm">
        <input name="productName" ref={register} placeholder="product name" />
        <br />
        <input name="price" ref={register} placeholder="price" />
        <br />
        <input name="pic" type="file" onChange={handleChange} />
        {loading && <img src={spinner} alt="Loading" />}
        <br />

        <input type="submit" />
      </form>
    </div>
  );
};

export default AdminAddProduct;
