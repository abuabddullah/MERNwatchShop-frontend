import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cartSlice";
import { clearWishlist, removeFromWishlist } from "../../features/wishSlice";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import WishlistCard from "./WishlistCard";

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
    <div className="home-container p-4">
      <h2 className="text-2xl font-semibold mb-4">WishList</h2>
      <hr className="mb-4" />
      {!wishedItems.length ? (
        <div className="cart-empty text-center">
          <img
            src="https://i.ibb.co/BjBJQJw/boy-mother-shopping-grocery-jpg.jpg"
            height="200"
            alt="empty-wishlist"
            className="mx-auto mb-4"
          />
          <h3 className="text-lg font-semibold">Your Wish List is empty</h3>
          <p className="text-gray-500 mb-4">
            Looks like you haven't added anything yet
          </p>
          <div className="start-shopping">
            <Link
              to="/home"
              className="text-blue-600 flex items-center justify-center"
            >
              <BsArrowLeft className="mr-2" />
              <span>Start Viewing</span>
            </Link>
          </div>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {wishedItems.map((product) => (
              <WishlistCard
                product={product}
                onAddToCart={handleAddToCart}
                onRemove={handleRemoveFromWishlist}
              />
            ))}
          </div>

          <div className="mt-4">
            <hr className="mb-2" />
            <button
              className="mt-2 w-full border p-2 rounded-lg hover:bg-gray-100 transition duration-200"
              onClick={handleClearWishlist}
            >
              Clear Wishlist
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Wishlist;
