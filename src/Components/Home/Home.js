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
    dispatch(addToWishlist(product));
  };

  return (
    <div className="py-8 px-16">
      {isLoading ? (
        <p>Loading . . .</p>
      ) : error ? (
        <p>An Error Occurred</p>
      ) : (
        <>
          <h2 className="text-center text-4xl font-light mb-2">
            All Collections are available
          </h2>
          <hr className="mb-4" />
          <div className="grid grid-cols-5 gap-4 mt-4">
            {items &&
              items.map((product) => (
                <div
                  key={product.id}
                  className="flex flex-col justify-between items-center bg-white p-4 rounded-lg shadow-lg"
                >
                  <h3 className="text-xl font-light">{product.name}</h3>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-4/5 h-56 object-cover my-2"
                  />
                  <div className="flex justify-between w-full mb-2">
                    <span className="text-sm">Price</span>
                    <span className="font-bold text-lg">{product.price}</span>
                  </div>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="w-full h-8 rounded bg-blue-600 text-white font-medium hover:bg-blue-500 transition"
                  >
                    Add to Cart
                  </button>
                  <button
                    className="mt-2 w-full h-8 rounded border border-gray-300 text-gray-600 hover:bg-gray-200 transition"
                    onClick={() => handleAddToWish(product)}
                  >
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
