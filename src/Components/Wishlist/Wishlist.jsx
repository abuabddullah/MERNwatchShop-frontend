import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cartSlice";
import { clearWishlist, removeFromWishlist } from "../../features/wishSlice";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const Wishlist = () => {
  const { wishedItems } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromWishlist = (product) => {
    console.log("wish to buy", product);
    dispatch(removeFromWishlist(product));
  };

  const handleClearWishlist = () => {
    dispatch(clearWishlist());
  };

  return (
    <div className="home-container">
      <>
        <h2>WishList</h2>
        <hr />
        {!wishedItems.length ? (
          <div className="cart-empty">
            <img
              src="https://i.ibb.co/BjBJQJw/boy-mother-shopping-grocery-jpg.jpg"
              height="200"
              alt="empty-cart-ho-home"
            />
            <h3>Your Wish List is empty</h3>
            <p>Looks like you haven't added anything yet</p>
            <div className="start-shopping">
              <Link to="/home">
                <BsArrowLeft />
                <span>Start Viewing</span>
              </Link>
            </div>
          </div>
        ) : (
          <>
            <div className="products">
              {wishedItems &&
                wishedItems.map((product) => (
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
                    <button
                      className="mt-2"
                      onClick={() => handleRemoveFromWishlist(product)}
                    >
                      Remove From Wishlist
                    </button>
                  </div>
                ))}
            </div>

            <div>
              <hr />
              <button
                className="mt-2 border p-2 rounded-lg "
                onClick={handleClearWishlist}
              >
                Clear Wishlist
              </button>
            </div>
          </>
        )}
      </>
    </div>
  );
};

export default Wishlist;
