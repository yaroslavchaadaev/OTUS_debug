import 'dotenv/config'

const config = {
  stage: {
    baseAuthURL: process.env.AUTH_BASE_URL_STAGE,
    credentials: {
      technopark: {
        client: process.env.AUTH_CLIENT_STAGE_TP,
        password: process.env.AUTH_PASS_STAGE_TP,
        subject: 'delivery'
      }
    }
  }
}

export default config
