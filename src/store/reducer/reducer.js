const initialState = {
  squares: Array(9).fill(null),
  xIsNext: true
}

const changeTurn = (state, action) => {
  console.log(`${action.payload.squareId}:${action.payload.boardId}`);
  return {...state,
    xIsNext: !state.xIsNext}
}

const reducer = (state = initialState, action) => {
  if (action.type === 'CHANGE_TURN') { return changeTurn(state, action); }
  return state;
}

export default reducer;