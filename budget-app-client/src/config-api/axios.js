import axios from 'axios'

const instance = axios.create({
  // baseURL: 'http://localhost:6001',
  baseURL: 'http://13.229.72.244:6001'
})

export default instance
