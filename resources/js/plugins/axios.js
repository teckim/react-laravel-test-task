import Axios from 'axios'
import { setupCache } from 'axios-cache-interceptor'

const TTL = 1000 * 60 * 5 // Cache TTL 5 Minutes

const config = {
  baseURL: 'http://react-laravel-test-task.test/',
  headers: {
    Accept: 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
  withCredentials: true,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
}

const axiosInstance = Axios.create(config)

export const axiosCachable = setupCache(Axios.create(config), {
  ttl: TTL,
})

export default axiosInstance
