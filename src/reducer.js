export const initialState = {
  basket: [],
  user: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.item] };

    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn("Not Ok");
      }
      return {
        ...state,
        basket: newBasket,
      };
    // case "REMOVE_FROM_BASKET":
    //   return {
    //     ...state,
    //     basket: state.basket.filter((item) => item.id !== action.id),
    //   };

    default:
      return state;
  }
};

export default reducer;
