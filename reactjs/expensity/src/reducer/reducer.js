export const Reducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSIVE":
      return state.expense.concat(action.expense)
    default:
      return state;
  }
}