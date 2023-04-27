import { AppBar, Toolbar, Button, Container, Typography } from '@mui/material'
import useAuth from '../hooks/useAuth'

function NavBar() {
  const { logout, isLoggedIn, user } = useAuth()

  return (
    isLoggedIn && (
      <AppBar color="transparent" position="static">
        <Container maxWidth="xl">
          <Toolbar>
            <Button color="warning" onClick={logout}>
              logout
            </Button>
            {isLoggedIn && (
              <Typography
                noWrap
                sx={{
                  ml: 'auto',
                }}
              >
                Logged in as: {user.email}
              </Typography>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    )
  )
}

export default NavBar
