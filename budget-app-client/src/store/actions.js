import axios from '../config-api/axios'

export function setIsLogin(payload) {
  return { type: 'LOGIN/SET_SETISLOGIN', payload }
}

export function setAccessToken(payload) {
  return { type: 'ACCESS_TOKEN/SET_ACCESS_TOKEN', payload }
}

export function setBudgets(payload) {
  return { type: 'BUDGET/STET_BUDGE', payload }
}


export function registerUser(payload) {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        url: '/users/register',
        method: 'POST',
        data: {
          username: payload.username,
          email: payload.email,
          password: payload.password
        }
      })
    } catch(err) {
      alert(`${err.response.data.message}`)
      console.log(err.response.data, 'catch error register')
    }
  }
}

export function loginUser(payload) {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        url: '/users/login',
        method: 'POST',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
      dispatch(setAccessToken(data.access_token))
      localStorage.setItem('username', data.username)
      localStorage.setItem('access_token', data.access_token)
      dispatch(setIsLogin(true))
    } catch(err) {
      console.log(err.response.data, 'catch error login')
      alert(`${err.response.data.message}`)
    }
  }
}

export function fetchBudgets(payload) {
  return async (dispatch) => {
    try {
      const response = await axios({
        url: '/budget/',
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      dispatch(setBudgets(response.data.budget))
    } catch(err) {
      console.log(err.response)
    }
  }
}

export function addIncome(payload) {
  return async (dispatch) => {
    try {
      console.log('Post income to server')
      console.log(payload)

      const response = await axios({
        url: '/budget/income',
        method: 'POST',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          detail: payload.detail,
          income: Number(payload.amount)
        },
      })
      console.log(response, 'response dari server, post transactions')
      dispatch(fetchBudgets())
    } catch (err) {
      alert(`${err.response.data.message}`)
      console.log(err.response.data)
    }
  }
}

export function addExpense(payload) {
  return async (dispatch) => {
    try {
      console.log('Post expense to server')
      
      const response = await axios({
        url: '/budget/expense',
        method: 'POST',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          detail: payload.detail,
          expense: Number(payload.amount)
        },
      })
      console.log(response, 'response dari server, post transactions')
      dispatch(fetchBudgets())
    } catch (err) {
      alert(`${err.response.data.message}`)
      console.log(err.response.data)
    }
  }
}

export function deleteBudget(payload) {
  return async (dispatch) => {
    try {
      console.log('Send payload to server')
      
      const response = await axios({
        url: '/budget/' + payload.id,
        method: 'DELETE',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      console.log(response, 'response dari server, delete transactions')
      dispatch(fetchBudgets())
    } catch (err) {
      console.log(err.response.data)
    }
  }
}