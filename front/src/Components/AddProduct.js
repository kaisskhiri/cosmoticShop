import React, { useState } from 'react';
import { addProduct } from '../Redux/Slice/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import UploadImage from './UploadImage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Pages/CSS/AddProduct.css'


function  AddProduct() {

  const [productData,setProductData ]= useState({})
  const products = useSelector(state => state.products.products)
  const dispatch = useDispatch()

const add =  (e)=>{
  e.preventDefault()
  dispatch(addProduct(productData));
  setProductData({})
  toast.success('Product added successfully!');
}



  return (
  <div className="admin-dashboard">
  
   
    <form className="registration-form">
        <h2 className="form-title"> Add Product</h2>
        <div className="form-group">
          <label>Title:</label>
          <input type="text" placeholder="Product Title" onChange={(e)=>{setProductData({...productData,title:e.target.value})}} required></input>
        </div>
        <div className="form-group">
        <label>Price:</label>
          <input type="text" placeholder="Price" onChange={(e)=>{setProductData({...productData,price:e.target.value})}} required></input>
        </div>
        <div className="form-group">
          <UploadImage productData={productData} setProductData={setProductData}></UploadImage>
        </div>
        <div className="form-group">
          <label>Family_Product:</label>
          <input type="text" placeholder="Family_of_Product"  onChange={(e)=>{setProductData({...productData,family_product:e.target.value})}} required></input>
    
        </div>
        <div className="form-group">
          <label>Inventory:</label>
          <input type="text" placeholder="Number_of_Items" onChange={(e)=>{setProductData({...productData,inventory:e.target.value})}} required></input>
    
        </div>

        <button type="submit" className="form-submit-btn" onClick={add}>ADD_Product</button>
  </form>
  <ToastContainer />
      
</div>
  );
}

export default AddProduct;
