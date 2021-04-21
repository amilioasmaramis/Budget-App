import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { setIsLogin } from '../../store/actions'
import './navbar.css'

export default function Navbar() {
  const access_token = localStorage.getItem('access_token')
  const history = useHistory()
  const dispatch = useDispatch()

  const handleLogout = (event) => {
    event.preventDefault()
    localStorage.clear()
    history.push('/login')
    dispatch(setIsLogin(false))
  }
  return (
    <header className="header">
      <ul>
        <li>Home</li>
        <li onClick={(event) => handleLogout(event)}>Logout</li>
      </ul>
    </header>
  )
}