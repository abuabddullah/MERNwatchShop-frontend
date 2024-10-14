// import React from "react";
// import { Link } from "react-router-dom";
// import { BsFillBagCheckFill } from "react-icons/bs";
// import { FaHeart } from "react-icons/fa";
// import { useSelector } from "react-redux";
// const Nav = () => {
//   const { cartItems } = useSelector((state) => state.cart);
//   const { wishedItems } = useSelector((state) => state.wishlist);
//   return (
//     <nav className="nav-bar">
//       <Link to="/home">
//         <h2>MERN Watch Shop</h2>
//       </Link>
//       <Link to="/cart">
//         <div className="nav-bag">
//           <span className="BsFillBagCheckFill">
//             <BsFillBagCheckFill />
//           </span>
//           <span className="bag-quantity">{cartItems.length}</span>
//         </div>
//       </Link>
//       <Link to="/wishlist">
//         <div className="nav-bag">
//           <span className="BsFillBagCheckFill">
//             <FaHeart />
//           </span>
//           <span className="bag-quantity">{wishedItems.length}</span>
//         </div>
//       </Link>
//     </nav>
//   );
// };

// export default Nav;

import React from "react";
import { Link } from "react-router-dom";
import { BsFillBagCheckFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { useSelector } from "react-redux";

const Nav = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { wishedItems } = useSelector((state) => state.wishlist);

  return (
    <nav className="sticky top-0 h-16 bg-black flex justify-between items-center px-16">
      <Link to="/home">
        <h2 className="text-white text-4xl">MERN Watch Shop</h2>
      </Link>
      <Link to="/cart">
        <div className="flex items-center">
          <span className="text-white text-3xl mt-1">
            <BsFillBagCheckFill />
          </span>
          <span className="flex justify-center items-center h-4 w-4 rounded-full bg-yellow-500 text-black text-sm font-bold ml-2">
            {cartItems.length}
          </span>
        </div>
      </Link>
      <Link to="/wishlist">
        <div className="flex items-center">
          <span className="text-white text-3xl mt-1">
            <FaHeart />
          </span>
          <span className="flex justify-center items-center h-4 w-4 rounded-full bg-yellow-500 text-black text-sm font-bold ml-2">
            {wishedItems.length}
          </span>
        </div>
      </Link>
    </nav>
  );
};

export default Nav;
