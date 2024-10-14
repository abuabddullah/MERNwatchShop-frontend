import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cartSlice";
import { addToWishlist } from "../../features/wishSlice";

const Home = () => {
  const { items, error, isLoading } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleAddToWish = (product) => {
    console.log("wish to buy", product);
    dispatch(addToWishlist(product));
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
            {items &&
              items.map((product) => (
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
                  <button onClick={() => handleAddToWish(product)}>
                    Wish to Buy
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
