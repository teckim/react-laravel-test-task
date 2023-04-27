import { createContext, useState, useMemo, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthService from '../services/authService'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const navigate = useNavigate()
  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  const isLoggedIn = useMemo(() => Boolean(user?.id), [user])

  useEffect(() => {
    setIsLoading(true)
    AuthService.me()
      .then((resData) => {
        setUser(resData.user)
        navigate('/')
      })
      .finally(() => setIsLoading(false))
  }, [navigate])

  const value = useMemo(
    () => ({ user, setUser, isLoggedIn, isLoading }),
    [user, isLoggedIn, isLoading]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthContext
