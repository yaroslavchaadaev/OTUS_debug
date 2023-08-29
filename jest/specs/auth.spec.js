import supertest from 'supertest'
import { expect, it } from '@jest/globals'
import config from '../framework/config/config.js'
import user from '../helpers/user'

describe('Тестовый набор для проверки авторизации пользователя', () => {
  describe('Позитивные кейсы', () => {
    it('Токен авторизации для клиента компании Технопарк', async () => {
      const res = await user.login(config.stage.credentials.technopark)

      expect(res.status).toBe(200)
      expect(res.body).toHaveProperty('expires_in')
      expect(res.body).toHaveProperty('token')
    })
  })
})
