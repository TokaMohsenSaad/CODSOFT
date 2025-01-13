import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const CartBtn = () => {
  // Get the state of addItem
  const state = useSelector((state) => state.addItem);

  // Safeguard: If state is undefined, fallback to an empty array
  const cartLength = state?.length || 0;

  return (
    <>
      <NavLink to="/cart" className="btn btn-outline-primary ms-2">
        <span className="fa fa-shopping-cart me-1"></span> Cart ({cartLength})
      </NavLink>
    </>
  );
};

export default CartBtn;

// src/component/Cart.jsx

// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { delItem, increment, decrement } from "../../redux/actions/index";
// import { NavLink } from "react-router-dom";

// const Cart = () => {
//   const state = useSelector((state) => state.addItem);
//   const dispatch = useDispatch();

//   const handleClose = (item) => {
//     dispatch(delItem(item));
//   };

//   const handleIncrement = (item) => {
//     dispatch(increment(item));
//   };

//   const handleDecrement = (item) => {
//     dispatch(decrement(item));
//   };

//   const cartItems = (cartItem) => {
//     return (
//       <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
//         <div className="container py-4">
//           <button
//             onClick={() => handleClose(cartItem)}
//             className="btn-close float-end"
//             aria-label="Close"
//           ></button>
//           <div className="row justify-content-center">
//             <div className="col-md-4">
//               <img
//                 src={cartItem.img}
//                 alt={cartItem.title}
//                 height="200px"
//                 width="180px"
//               />
//             </div>
//             <div className="col-md-4">
//               <h3>{cartItem.title}</h3>
//               <p className="lead fw-bold">${cartItem.price}</p>
//               <div className="d-flex align-items-center">
//                 <button
//                   className="btn btn-outline-secondary"
//                   onClick={() => handleDecrement(cartItem)}
//                 >
//                   -
//                 </button>
//                 <p className="mx-3">{cartItem.quantity}</p>
//                 <button
//                   className="btn btn-outline-secondary"
//                   onClick={() => handleIncrement(cartItem)}
//                 >
//                   +
//                 </button>
//               </div>
//               <p className="lead fw-bold">Total: ${cartItem.totalPrice}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const emptyCart = () => {
//     return (
//       <div className="px-4 my-5 bg-light rounded-3 py-5">
//         <div className="container py-4">
//           <div className="row">
//             <h3>Your Cart is Empty</h3>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const button = () => {
//     return (
//       <div className="container">
//         <div className="row">
//           <NavLink
//             to="/checkout"
//             className="btn btn-outline-primary mb-5 w-25 mx-auto"
//           >
//             Proceed To checkout
//           </NavLink>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <>
//       {state.length === 0 && emptyCart()}
//       {state.length !== 0 && state.map(cartItems)}
//       {state.length !== 0 && button()}
//     </>
//   );
// };

// export default Cart;
