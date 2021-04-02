import baseUrl from '../../constant'
import fetchService from '../../services'
import Load from '../../utils'

const gameController = {
  getLatest: async (req, res) => {
    const { page = 1 } = req.query

    try {
      const response = await fetchService(
        `${baseUrl}/komik-terbaru/page/${page}`,
        res,
      )
      return Load.articles(req, res, response)
    } catch (error) {
      return error
    }
  },
  getPopular: async (req, res) => {
    const { page = 1 } = req.query

    try {
      const response = await fetchService(
        `${baseUrl}/komik-populer/page/${page}`,
        res,
      )
      return Load.popular(req, res, response)
    } catch (error) {
      return error
    }
  },
  getColor: async (req, res) => {
    const { page = 1 } = req.query

    try {
      const response = await fetchService(
        `${baseUrl}/komik-berwarna/page/${page}`,
        res,
      )
      return Load.color(req, res, response)
    } catch (error) {
      return error
    }
  },
  getAction: async (req, res) => {
    const { page = 1 } = req.query

    try {
      const response = await fetchService(
        `${baseUrl}/genres/action/page/${page}/`,
        res,
      )
      return Load.genre(req, res, response)
    } catch (error) {
      return error
    }
  },
  getAdventure: async (req, res) => {
    const { page = 1 } = req.query

    try {
      const response = await fetchService(
        `${baseUrl}/genres/adventure/page/${page}/`,
        res,
      )
      return Load.genre(req, res, response)
    } catch (error) {
      return error
    }
  },
  getComedy: async (req, res) => {
    const { page = 1 } = req.query

    try {
      const response = await fetchService(
        `${baseUrl}/genres/comedy/page/${page}/`,
        res,
      )
      return Load.genre(req, res, response)
    } catch (error) {
      return error
    }
  },
}

export default gameController
