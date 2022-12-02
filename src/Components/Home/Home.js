import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cartSlice";
import { useGetAllProductsQuery } from "./../../features/productsAPI";

const Home = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  
  return (
    <div className="home-container">
      {isLoading ? (
        <p>Loading . . .</p>
      ) : error ? (
        <p>An Error Occured</p>
      ) : (
        <>
          <h2>All Collections are available</h2>
          <hr />
          <div className="products">
            {data &&
              data.map((product) => (
                <div key={product.id} className="product">
                  <h3>{product.name}</h3>
                  <img src={product.image} alt={product.name} />
                  <div className="details">
                    <span>Price</span>
                    <span className="price">{product.price}</span>
                  </div>
                  <button onClick={() => handleAddToCart(product)}>
                    Add to Cart
                  </button>
                </div>
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
