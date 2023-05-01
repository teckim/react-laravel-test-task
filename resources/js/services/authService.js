import axios from '../plugins/axios'

const AuthService = {
  signin(data) {
    return new Promise((resolve, reject) => {
      axios
        .get('/sanctum/csrf-cookie')
        .then(() => {
          axios
            .post('/api/auth/login', data)
            .then((response) => resolve(response?.data))
            .catch((error) => reject(error?.response?.data))
        })
        .catch((error) => reject(error?.response?.data))
    })
  },
  signout() {
    return new Promise((resolve, reject) => {
      axios
        .post('/api/auth/logout')
        .then((response) => resolve(response?.data))
        .catch((error) => reject(error?.response?.data))
    })
  },
  me() {
    return new Promise((resolve, reject) => {
      axios
        .get('/api/auth/me')
        .then((response) => resolve(response?.data))
        .catch((error) => reject(error?.response?.data))
    })
  },
}

export default AuthService
