import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import AuthService from '../services/authService'
import AuthContext from '../contexts/AuthContext'

function useAuth() {
  const [errors, setErrors] = useState({})
  const { setUser, user, isLoggedIn } = useContext(AuthContext)
  const navigate = useNavigate()

  const login = (data) => {
    setErrors({})

    AuthService.signin(data)
      .then((resData) => {
        setUser(resData.user)
        navigate('/')
      })
      .catch((errData) => {
        if (errData?.errors) setErrors(errData.errors || {})
        else if (errData?.message) setErrors({ message: errData.message })
      })
  }

  const logout = (data) => {
    AuthService.signout(data).then(() => {
      setUser({})
      navigate('/login')
    })
  }

  return {
    user,
    isLoggedIn,
    errors,
    login,
    logout,
  }
}

export default useAuth
