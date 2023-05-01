import { useContext } from 'react'
import { useLocation, Navigate } from 'react-router-dom'
import { Backdrop, CircularProgress } from '@mui/material'
import AuthContext from '../contexts/AuthContext'

function ProtectedView({ children }) {
  const { isLoggedIn, isLoading } = useContext(AuthContext)

  const location = useLocation()

  if (!isLoggedIn && !isLoading) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />
  }
  if (isLoading) {
    return (
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    )
  }

  return children
}

export default ProtectedView
