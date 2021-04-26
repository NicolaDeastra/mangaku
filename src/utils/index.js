import cheerio from 'cheerio'

const Load = {
  new: async (req, res, response) => {
    try {
      const $ = cheerio.load(response.data)
      const element = $('.listupd')

      let title
      let score
      let type
      let tag
      let chapter

      let href

      let endpoint
      let img

      let media = []

      element.find('.bs').each((i, e) => {
        title = $(e).find('.bsx a ').attr('title')
        img = $(e).find('.bsx a .limit img').attr('src')
        type = $(e).find('.bsx a .limit span').text() || null
        chapter = $(e).find('.bsx a .bigor .adds .epxs').text()
        score = $(e).find('.bsx a .bigor .adds .rating i').text()
        href = $(e).find('a').attr('href').split('/')
        endpoint = href[4]

        media.push({
          title,
          img,
          chapter,
          score,
          type,
          endpoint,
        })
      })

      return res.send(media)
    } catch (error) {
      return error
    }
  },
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
  detail: async (req, res, response) => {
    try {
      const $ = cheerio.load(response.data)
      const element = $('.infoanime')
      const chapter = $('#chapter_list')
      const tabsarea = $('.tabsarea')

      let object = {}
      let olderAndNew = []
      let genres = []
      let chapters = []
      let t = element.find('h1').text().split(' ')
      let title = t.slice(1).join(' ')
      let sinopsis = tabsarea
        .find('#sinopsis .whites .desc .entry-content p')
        .text()
      let heading = element.find('.shortcsc').text()
      let rating = element
        .find('.thumb .rt .ratingmanga .rtg .clearfix i')
        .text()

      element.find('.epsbaru .epsbr').each((i, e) => {
        let href = $(e).find('a').attr('href').split('/')

        let endpoint = href[3]

        olderAndNew.push(endpoint)
      })

      element.find('.infox .genre-info  a').each((i, e) => {
        let genre = $(e).text()

        genres.push(genre)
      })

      chapter.find('ul li').each((i, e) => {
        let obj = {}
        let episode = $(e).find('.lchx a').text()
        let href = $(e).find('.lchx a').attr('href').split('/')
        let endpoint = href[3]
        let update = $(e).find('.dt a').text()

        obj.episode = episode
        obj.endpoint = endpoint
        obj.update = update

        chapters.push(obj)
      })

      object.title = title
      object.heading = heading
      object.rating = rating
      object.genres = genres
      object.sinopsis = sinopsis
      object.olderAndNew = olderAndNew
      object.chapters = chapters

      return res.send(object)
    } catch (error) {
      return error
    }
  },
}

export default Load
