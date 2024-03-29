//? hooks
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import {useDispatch, useSelector,} from 'react-redux'

// REDUX ACTIONS
import { getLogin } from "../../redux/actions/loginActions"

import picksTagramLogo from "../../assets/NicePng_instagram-button-png_723402.png"
import { Link } from "react-router-dom"
// development
const Login = ()=>{

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isAuth = useSelector(state=> state.login.isAuth)
  const errorForm = useSelector(state=> state.login.errorForm)
  
  // console.log(isAuth)
  // console.log(errorForm)

  const [userData, setUserData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (event)=>{
    setUserData({
      ...userData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(userData)
    dispatch(getLogin(userData))

    //we dont need this for our development mode
    // if(isAuth === true) navigate('/home')
  }

    return(
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src={picksTagramLogo}
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                onChange={handleChange}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                onChange={handleChange}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={!userData.email || !userData.password}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
              <p className="text-red-500">{errorForm}</p>
            </div>
            <div>
              <p className="mt-10 text-center text-sm text-gray-500">
                Not a member? 
                <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                  <Link to="/singup">. Sign up</Link>
                </a>
              </p>
            </div>
          </form>

        </div>
      </div>
    )
}

export default Login