import supertest from 'supertest'
import config from '../framework/config/config.js'

const { baseAuthURL } = config.stage
console.log(baseAuthURL)

let token = ''

const user = {
  login: (payload) => {
    return supertest(baseAuthURL)
      .post('/api/v1/token')
      .set('Accept', 'application/json')
      .send(payload)
  }
}

export default user
