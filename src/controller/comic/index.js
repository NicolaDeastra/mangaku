import baseUrl from '../../constant'
import fetchService from '../../services'
import Load from '../../utils'

const gameController = {
  getLatest: async (req, res) => {
    const { page = 1 } = req.query

    try {
      const response = await fetchService(
        `${baseUrl}/manga/?page=${page}&order=update`,
        res,
      )
      return Load.article(req, res, response)
    } catch (error) {
      return error
    }
  },
  getChapter: async (req, res) => {
    const { endpoint } = req.params

    try {
      const response = await fetchService(`${baseUrl}/${endpoint}/`, res)
      return Load.read(req, res, response)
    } catch (error) {
      return error
    }
  },
  getDetail: async (req, res) => {
    const { endpoint } = req.params

    try {
      const response = await fetchService(`${baseUrl}/manga/${endpoint}/`, res)
      return Load.detail(req, res, response)
    } catch (error) {
      return error
    }
  },

  getSearch: async (req, res) => {
    const { page = 1, s } = req.query

    try {
      const response = await fetchService(
        `${baseUrl}/page/${page}/?s=${s}`,
        res,
      )
      return Load.article(req, res, response)
    } catch (error) {
      return error
    }
  },

  getManga: async (req, res) => {
    const { page = 1 } = req.query

    try {
      const response = await fetchService(
        `${baseUrl}/manga/?page=${page}&order=update&type=Manga`,
        res,
      )
      return Load.article(req, res, response)
    } catch (error) {
      return error
    }
  },

  getManhua: async (req, res) => {
    const { page = 1 } = req.query

    try {
      const response = await fetchService(
        `${baseUrl}/manga/?page=${page}&order=update&type=Manhua`,
        res,
      )
      return Load.article(req, res, response)
    } catch (error) {
      return error
    }
  },

  getManhwa: async (req, res) => {
    const { page = 1 } = req.query

    try {
      const response = await fetchService(
        `${baseUrl}/manga/?page=${page}&order=update&type=Manhwa`,
        res,
      )
      return Load.article(req, res, response)
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
      return Load.article(req, res, response)
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
      return Load.article(req, res, response)
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
      return Load.article(req, res, response)
    } catch (error) {
      return error
    }
  },

  getDrama: async (req, res) => {
    const { page = 1 } = req.query

    try {
      const response = await fetchService(
        `${baseUrl}/genres/drama/page/${page}/`,
        res,
      )
      return Load.article(req, res, response)
    } catch (error) {
      return error
    }
  },

  getFantasy: async (req, res) => {
    const { page = 1 } = req.query

    try {
      const response = await fetchService(
        `${baseUrl}/genres/fantasy/page/${page}/`,
        res,
      )
      return Load.article(req, res, response)
    } catch (error) {
      return error
    }
  },

  getIsekai: async (req, res) => {
    const { page = 1 } = req.query

    try {
      const response = await fetchService(
        `${baseUrl}/genres/isekai/page/${page}/`,
        res,
      )
      return Load.article(req, res, response)
    } catch (error) {
      return error
    }
  },

  getSliceOfLife: async (req, res) => {
    const { page = 1 } = req.query

    try {
      const response = await fetchService(
        `${baseUrl}/genres/slice-of-life/page/${page}/`,
        res,
      )
      return Load.article(req, res, response)
    } catch (error) {
      return error
    }
  },

  getRomance: async (req, res) => {
    const { page = 1 } = req.query

    try {
      const response = await fetchService(
        `${baseUrl}/genres/romance/page/${page}/`,
        res,
      )
      return Load.article(req, res, response)
    } catch (error) {
      return error
    }
  },

  getYuri: async (req, res) => {
    const { page = 1 } = req.query

    try {
      const response = await fetchService(
        `${baseUrl}/genres/yuri/page/${page}/`,
        res,
      )
      return Load.article(req, res, response)
    } catch (error) {
      return error
    }
  },

  getMystery: async (req, res) => {
    const { page = 1 } = req.query

    try {
      const response = await fetchService(
        `${baseUrl}/genres/mystery/page/${page}/`,
        res,
      )
      return Load.article(req, res, response)
    } catch (error) {
      return error
    }
  },

  getPsychological: async (req, res) => {
    const { page = 1 } = req.query

    try {
      const response = await fetchService(
        `${baseUrl}/genres/psychological/page/${page}/`,
        res,
      )
      return Load.article(req, res, response)
    } catch (error) {
      return error
    }
  },

  getSciFi: async (req, res) => {
    const { page = 1 } = req.query

    try {
      const response = await fetchService(
        `${baseUrl}/genres/sci-fi/page/${page}/`,
        res,
      )
      return Load.article(req, res, response)
    } catch (error) {
      return error
    }
  },
}

export default gameController
