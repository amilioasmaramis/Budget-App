import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './login.css';

import { loginUser, registerUser } from '../../store/actions'
import { useHistory } from 'react-router-dom';

export default function Login() {
  const [active, setActive] = useState(false)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const history = useHistory()

  const isLogin = useSelector(state => state.budget.isLogin)

  useEffect(() => {
    if (localStorage.getItem('access_token')) {
      history.push('/')
    }
    // eslint-disable-next-line
  }, [history])

  useEffect(() => {
    if (isLogin) {
      history.push('/')
    }
  }, [isLogin, history])

  const signUpContainerClick = () => {
    setActive(true)
  }
  const signInContainerClick = () => {
    setActive(false)
  }

  const handleSubmitRegister = (e) => {
    e.preventDefault()
    dispatch(registerUser({username, email, password}))
    setActive(true)
    setUsername('')
    setEmail('')
    setPassword('')
  }

  const handleSubmitLogin = (e) => {
    e.preventDefault()
    dispatch(loginUser({email, password}))
  }

  return (
    <div className={active ? "container-login right-panel-active" : "container-login" } id="container-login">
      <div className="form-container sign-up-container">
        <form className="form-login" action="#" onSubmit={(e) => handleSubmitRegister(e)}>
          <h1 className="h1-login">Create Account</h1>
          <div class="social-container">
            <a href="#a" to="a" className="social"><i className="fab fa-facebook-f"></i></a>
            <a href="#a" to="a" className="social"><i className="fab fa-google-plus-g"></i></a>
            <a href="#a" to="a" className="social"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <span className="span-login">or use your email for registration</span>
          <input 
            type="text" 
            placeholder="Name" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input 
            type="email" 
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}  
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form className="form-login" action="#" onSubmit={(e) => handleSubmitLogin(e)}>
          <h1>Sign in</h1>
          <div className="social-container">
            <a href="#a" to="a" className="social"><i className="fab fa-facebook-f"></i></a>
            <a href="#a" to="a" className="social"><i className="fab fa-google-plus-g"></i></a>
            <a href="#a" to="a" className="social"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <span className="span-login">or use your account</span>
          <input 
            type="email" 
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}  
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* <a href="#a" to="">Forgot your password?</a> */}
          <button>Sign In</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p className="p-login">To keep connected with us please login with your personal info</p>
            <button className="ghost" id="signIn" onClick={signInContainerClick}>Sign In</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p className="p-login">Enter your personal details and start journey with us</p>
            <button className="ghost" id="signUp" onClick={signUpContainerClick}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  )
}