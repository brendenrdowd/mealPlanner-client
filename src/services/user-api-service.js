import config from '../config'
import TokenService from '../services/token-service'

const UserService = {
  saveUser(id) {
    window.localStorage.setItem('user', id)
  },
  getUser() {
    // can refactor to just use encoded email?
    const userId = window.localStorage.getItem('user')
    return fetch(`${config.API_ENDPOINT}/users/${userId}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },

    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
}

export default UserService