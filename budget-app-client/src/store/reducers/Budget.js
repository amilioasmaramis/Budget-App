// Reducers untuk budget

const initialState = {
  budget: [],
  transactions: []
}

function reducer(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case 'TRANSACTIONS/SET_TRANSACTIONS':
      return { ...state, transactions: [...state.transactions, payload]}
    case "BUDGET/STET_BUDGE":
      return { ...state, data: payload}
    default:
      return state
  }
}

export default reducer
