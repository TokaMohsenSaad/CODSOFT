// // Exporting action creators
export const addItem = (item) => {
  return {
    type: "ADDITEM",
    payload: item,
  };
};

// export const delItem = (item) => {
//   return {
//     type: "DELITEM",
//     payload: item,
//   };
// };

// src/redux/actions/index.js

export const increment = (item) => {
  return {
    type: "INCREMENT",
    payload: item,
  };
};

export const decrement = (item) => {
  return {
    type: "DECREMENT",
    payload: item,
  };
};

export const delItem = (item) => {
  return {
    type: "DELITEM",
    payload: item,
  };
};
