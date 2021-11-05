export const Reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state = state + Number(action.payload);
    case "DECREMENT":
      return state = state - Number(action.payload);
    case "RESET":
      return state = 0;
    default:
      return state;
  }
}