import {
  AppBar,
  Toolbar,
  Button,
  Container,
  Typography,
  Stack,
} from '@mui/material'
import useAuth from '../hooks/useAuth'

function NavBar() {
  const { logout, isLoggedIn, user } = useAuth()

  return (
    isLoggedIn && (
      <AppBar color="transparent" position="static" sx={{ mb: 8 }}>
        <Container maxWidth="xl">
          <Toolbar>
            <Typography
              fontSize={12}
              fontWeight={500}
              textTransform="uppercase"
              color="primary"
              sx={{
                mr: 'auto',
              }}
            >
              Unis
            </Typography>
            {isLoggedIn && (
              <Stack>
                <Typography color="grey" variant="caption" noWrap>
                  Logged in as
                </Typography>
                <Typography variant="body2" noWrap>
                  {user.email}
                </Typography>
              </Stack>
            )}
            <Button
              sx={{
                ml: 2,
              }}
              color="warning"
              size="small"
              onClick={logout}
            >
              logout
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    )
  )
}

export default NavBar
