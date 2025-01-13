// const initialState = []; // Ensure the initial state is an empty array

// const addItems = (state = initialState, action) => {
//   switch (action.type) {
//     case "ADDITEM":
//       return [...state, action.payload];
//     case "DELITEM":
//       return state.filter((x) => x.id !== action.payload.id);
//     default:
//       return state;
//   }
// };

// export default addItems;

// src/redux/reducers/addItem.js

const addItem = [];

const addItems = (state = addItem, action) => {
  switch (action.type) {
    case "ADDITEM":
      return [...state, action.payload];

    case "DELITEM":
      return state.filter((x) => x.id !== action.payload.id);

    case "INCREMENT":
      return state.map((item) =>
        item.id === action.payload.id
          ? {
              ...item,
              quantity: item.quantity + 1,
              totalPrice: item.price * (item.quantity + 1),
            }
          : item
      );

    case "DECREMENT":
      return state.map((item) =>
        item.id === action.payload.id && item.quantity > 1
          ? {
              ...item,
              quantity: item.quantity - 1,
              totalPrice: item.price * (item.quantity - 1),
            }
          : item
      );

    default:
      return state;
  }
};

export default addItems;
