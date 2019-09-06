const initialState = {
  squares: Array(9).fill(null),
  xIsNext: true
}

const changeTurn = (state, action) => {
  console.log(state.xIsNext);
  console.log(!state.xIsNext);
  return {xIsNext: !state.xIsNext}
}

const reducer = (state = initialState, action) => {
  if (action.type === 'CHANGE_TURN') { changeTurn(state, action); }
  return state;
}

export default reducer;