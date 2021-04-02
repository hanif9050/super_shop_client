import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import AdminAddProduct from "../AdminAddProduct/AdminAddProduct";
import AdminManageOrder from "../AdminManageOrder/AdminManageOrder";
import "./admin.css";

const Admin = () => {
  // const { register, handleSubmit } = useForm();
  // const [imageUrl, setImageUrl] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const onSubmit = (data) => {
  //   const eventData = {
  //     name: data.productName,
  //     price: data.price,
  //     imageUrl: imageUrl,
  //   };
  //   console.log(eventData);
  //   fetch("https://immense-eyrie-52740.herokuapp.com/addProduct", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(eventData),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // };
  // const handleChange = (e) => {
  //   console.log(e.target.files[0]);
  //   let data = new FormData();
  //   data.set("key", "bd3d22819ea1a2a3bb9aab5e5b34555f");
  //   data.append("image", e.target.files[0]);
  //   console.log("form", data);

  //   fetch("https://api.imgbb.com/1/upload", {
  //     method: "POST",
  //     body: data,
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setImageUrl(data.data.display_url);

  //       console.log("imageUrl", data.data.display_url);
  //     });
  // };
  const [pageControl, setPageControl] = useState({
    manage: false,
    addProduct: false,
    editProduct: false,
  });
  const [manage, setManage] = useState(true);
  const [addProduct, setAddProduct] = useState(false);
  const control = false;

  const handleManage = () => {
    setManage(!manage);
    setAddProduct(false);
  };

  const handleAddProduct = () => {
    setAddProduct(!addProduct);
    setManage(false);
  };
  const handleEditProduct = () => {};
  return (
    <div className="adminContainer">
      <div className="adminLeft">
        <button onClick={handleManage}>Manage Product</button>
        <button onClick={handleAddProduct}>Add Product</button>
        <button onClick={handleEditProduct}>Edit Product</button>
      </div>
      {/* <h1>I m Admin</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="productName" ref={register} placeholder="product name" />
        <br />
        <input name="price" ref={register} placeholder="price" />
        <br />
        <input name="pic" type="file" onChange={handleChange} />
        {loading && <p>loading...</p>}
        <br />

        <input type="submit" />
      </form> */}
      <div>
        {manage && <AdminManageOrder manage={manage} />}
        {addProduct && <AdminAddProduct />}
      </div>
      {console.log(manage)}
      {console.log("addP", addProduct)}
    </div>
  );
};

export default Admin;
