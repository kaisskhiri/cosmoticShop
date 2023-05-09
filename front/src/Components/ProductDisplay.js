import React from 'react';
import '../Pages/CSS/ProductDisplay.css';
import { useSelector} from 'react-redux';
import DeleteProduct from './DeleteProduct';

function ProductDisplay() {

  const products = useSelector((state) => state.cart.items);
  console.log(products);
 
  return (
    <div className="product-container">
      <h1>Products</h1>
      <ul className="product-list">
      {products.map((product) => (
          <li key={product._id} className="product-card">
            <img className="product-image" src={product.image} alt={product.title} />
            <div className="product-details">
              <h2 className="product-title">{product.title}</h2>
              <p className={`product-price ${product.price > 100 ? 'highlighted' : ''}`}>
                {product.price}
                {product.discount && <span className="discount">{product.discount}% off </span>}
              </p>
              <button className="add-to-cart-btn">Add to cart</button>
              <DeleteProduct ></DeleteProduct>
            </div>
          </li>
        ))}
      </ul>
    </div>  
  );
}

export default ProductDisplay;

/* import React, { useEffect, useState } from 'react';
import '../Pages/CSS/ProductDisplay.css';
import { useSelector, useDispatch } from 'react-redux';
import { getAllProducts, sortProducts } from '../Redux/Slice/cartSlice';
import SortButton from './SortButton';

function ProductDisplay() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.items);
  const [sortOption, setSortOption] = useState('default');

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const handleSortOptionChange = (option) => {
    setSortOption(option.value);
    dispatch(sortProducts(option.value));
  };

  return (
    <div className="product-container">
      <h1>Products</h1>
      <SortButton
        options={[
          { label: 'Default', value: 'default' },
          { label: 'Price: Low to High', value: 'price-asc' },
          { label: 'Price: High to Low', value: 'price-desc' },
          { label: 'Title: A to Z', value: 'title-asc' },
          { label: 'Title: Z to A', value: 'title-desc' },
        ]}
        onSelectOption={handleSortOptionChange}
      />
      <ul className="product-list">
        {products.map((product) => (
          <li key={product._id} className="product-card">
            <img className="product-image" src={product.image} alt={product.title} />
            <div className="product-details">
              <h2 className="product-title">{product.title}</h2>
              <p className={`product-price ${product.price > 100 ? 'highlighted' : ''}`}>
                {product.price}
                {product.discount && <span className="discount">{product.discount}% off</span>}
              </p>
              <button className="add-to-cart-btn">Add to cart</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductDisplay;
 */