import axios from '../config-api/axios'

export function setTransactions(payload) {
  return { type: 'TRANSACTIONS/SET_TRANSACTIONS', payload }
}

export function setBudgets(payload) {
  return { type: 'BUDGET/STET_BUDGE', payload }
}

export function fetchBudgets(payload) {
  return async (dispatch) => {
    try {
      const response = await axios({
        method: 'get',
        url: `/`
      })
      const data = await response.json()
      dispatch(setBudgets(data.data))
    } catch(err) {
      console.log(err)
    }
  }
}

export function addIncome(payload) {
  return async (dispatch, getState) => {
    try {
      console.log('Post income to server')
      let { income } = getState()

      const response = await axios({
        method: 'post',
        url: `/income`,
        data: income,
      })
      console.log(response, 'response dari server, post transactions')
      dispatch(setTransactions(response))
    } catch (err) {
      console.log(err)
    }
  }
}

export function addExpense(payload) {
  return async (dispatch, getState) => {
    try {
      console.log('Post income to server')
      let { expense } = getState()

      const response = await axios({
        method: 'post',
        url: `/expense`,
        data: expense,
      })
      console.log(response, 'response dari server, post transactions')
      dispatch(setTransactions(response))
    } catch (err) {
      console.log(err)
    }
  }
}