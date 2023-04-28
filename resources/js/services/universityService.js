import axios from '../plugins/axios'

const UniversityService = {
  search(query) {
    return new Promise((resolve, reject) => {
      axios
        .get('/api/universities', {
          params: {
            query,
          },
        })
        .then((response) => resolve(response?.data))
        .catch((error) => reject(error?.response?.data))
    })
  },
}

export default UniversityService
