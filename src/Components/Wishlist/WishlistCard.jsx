import React from "react";

const WishlistCard = ({ product, onAddToCart, onRemove }) => {
  return (
    <div className="product p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-medium">{product.name}</h3>
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover mb-2 rounded"
      />
      <div className="details mb-2">
        <span className="font-medium">Price:</span>
        <span className="font-semibold">${product.price}</span>
      </div>
      <button
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500 transition duration-200"
        onClick={() => onAddToCart(product)}
      >
        Add to Cart
      </button>
      <button
        className="mt-2 w-full border p-2 rounded-lg hover:bg-gray-100 transition duration-200"
        onClick={() => onRemove(product)}
      >
        Remove From Wishlist
      </button>
    </div>
  );
};

export default WishlistCard;
