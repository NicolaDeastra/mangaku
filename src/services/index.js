import tough from 'tough-cookie'
import tunnel from 'tunnel'

const axios = require('axios').default
const axiosCookieJarSupport = require('axios-cookiejar-support').default

axiosCookieJarSupport(axios)

const cookieJar = new tough.CookieJar()

const tunnelAgent = tunnel.httpsOverHttp({
  proxy: {
    host: '103.106.219.121',
    port: 8080,
  },
})

const fetchService = async (url, res) => {
  try {
    const response = await axios.get(url, {
      jar: cookieJar,
      withCredentials: true,
    })

    return await response
  } catch (error) {
    res.send({
      status: false,
      code: 404,
      message: 'You got Error',
    })

    throw error
  }
}

export default fetchService
