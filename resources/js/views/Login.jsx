import React, { useState } from 'react'
import {
  Container,
  Stack,
  Card,
  CardHeader,
  CardContent,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
} from '@mui/material'
import useAuth from '../hooks/useAuth'

function LoginView() {
  const { login, errors } = useAuth()

  const handleLogin = (data) => {
    login(data)
  }

  return (
    <Container maxWidth="sm" sx={{ marginTop: 12 }}>
      <Card>
        <CardHeader
          title="Login"
          subheader={errors?.message}
          subheaderTypographyProps={{ sx: { color: 'error.light' } }}
        />
        <CardContent>
          <LoginForm errors={errors} onLogin={handleLogin} />
        </CardContent>
      </Card>
    </Container>
  )
}

function LoginForm({ errors, onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    const data = {
      email,
      password,
      remember,
    }

    onLogin(data)
  }

  return (
    <Stack spacing={2}>
      <TextField
        label="Email"
        placeholder="email@example.com"
        error={!!errors?.email}
        helperText={errors?.email}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        error={!!errors?.password}
        helperText={errors?.password}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
          />
        }
        label="Remember me"
      />
      <Button variant="contained" size="large" onClick={onSubmit}>
        Login
      </Button>
    </Stack>
  )
}

export default LoginView
