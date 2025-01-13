export const delItem = (item) => {
  return {
    type: "DELITEM",
    payload: item,
  };
};
