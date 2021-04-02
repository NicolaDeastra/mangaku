import cheerio from 'cheerio'

const Load = {
  articles: async (req, res, response) => {
    try {
      const $ = cheerio.load(response.data)
      const element = $('.listupd')

      let title
      let thumb
      let type
      let tag
      let chapter
      let time
      let href

      let endpoint
      let img

      let media = []

      element.find('.animposx').each((i, e) => {
        title = $(e).find('.bigor a div h4').text()
        img = $(e).find('a div img').attr('src')
        thumb = img.replace('146', '346').replace('208', '508')
        type = $(e).find('a div span').attr('class').split(' ')
        tag = type[1]
        chapter = $(e).find('.bigor div div a').text()
        time = $(e).find('.bigor div div span').text()
        href = $(e).find('a').attr('href').split('/')
        endpoint = href[4]

        media.push({
          title,
          thumb,
          tag,
          chapter,
          time,
          endpoint,
        })
      })

      return res.send(media)
    } catch (error) {
      return error
    }
  },
  popular: async (req, res, response) => {
    try {
      const $ = cheerio.load(response.data)
      const element = $('.listupd')

      let title
      let thumb
      let type
      let tag

      let score
      let href

      let endpoint
      let img

      let media = []

      element.find('.animposx').each((i, e) => {
        title = $(e).find('.bigors a div h4').text()
        img = $(e).find('a div img').attr('src')
        thumb = img.replace('146', '346').replace('208', '508')
        type = $(e).find('a div .typeflag').attr('class').split(' ')
        tag = type[1]

        score = $(e).find('.bigors div div i').text()
        href = $(e).find('a').attr('href').split('/')
        endpoint = href[4]

        media.push({
          title,
          thumb,
          tag,
          score,
          endpoint,
        })
      })

      return res.send(media)
    } catch (error) {
      return error
    }
  },
  color: async (req, res, response) => {
    try {
      const $ = cheerio.load(response.data)
      const element = $('.listupd')

      let title
      let thumb
      let type
      let tag
      let chapter
      let time
      let href

      let endpoint
      let img

      let media = []

      element.find('.animposx').each((i, e) => {
        title = $(e).find('.bigors a div h4').text()
        img = $(e).find('a div img').attr('src')
        thumb = img.replace('146', '346').replace('208', '508')
        type = $(e).find('a div .typeflag').attr('class').split(' ')
        tag = type[1]
        chapter = $(e).find('.bigors div div a').text()
        time = $(e).find('.bigors div div span').text()
        href = $(e).find('a').attr('href').split('/')
        endpoint = href[4]

        media.push({
          title,
          thumb,
          tag,
          chapter,
          time,
          endpoint,
        })
      })

      return res.send(media)
    } catch (error) {
      return error
    }
  },
  genre: async (req, res, response) => {
    try {
      const $ = cheerio.load(response.data)
      const element = $('.film-list')

      let title
      let thumb
      let type
      let tag

      let href
      let score
      let endpoint
      let img

      let media = []

      element.find('.animposx').each((i, e) => {
        title = $(e).find('.bigors a div h4').text().trim()
        img = $(e).find('a div img').attr('src')
        thumb = img.replace('146', '346').replace('208', '508')
        type = $(e).find('a div .typeflag').attr('class').split(' ')
        tag = type[1]

        score = $(e).find('.bigors div div i').text()
        href = $(e).find('a').attr('href').split('/')
        endpoint = href[4]

        media.push({
          title,
          thumb,
          tag,
          score,
          endpoint,
        })
      })

      return res.send(media)
    } catch (error) {
      return error
    }
  },
  manhua: async (req, res, response) => {
    try {
      const $ = cheerio.load(response.data)
      const element = $('.listupd')

      let title
      let thumb
      let type
      let tag

      let score
      let href

      let endpoint
      let img

      let media = []

      element.find('.animposx').each((i, e) => {
        title = $(e).find('a .bigors .tt ').text()
        img = $(e).find('a div img').attr('src')
        thumb = img.replace('146', '346').replace('201', '508')
        type = $(e).find('a div .typeflag').attr('class').split(' ')
        tag = type[1]

        score = $(e).find('.bigors div div i').text()
        href = $(e).find('a').attr('href').split('/')
        endpoint = href[4]

        media.push({
          title,
          thumb,
          tag,
          score,
          endpoint,
        })
      })

      return res.send(media)
    } catch (error) {
      return error
    }
  },
}

export default Load
