import cheerio from 'cheerio'

function getInfo(attr) {
  const arr = attr.split(':')
  return arr[1].trim()
}

const Load = {
  article: async (req, res, response) => {
    try {
      const $ = cheerio.load(response.data)
      const element = $('.listupd')

      let title
      let score
      let type
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
  detail: async (req, res, response) => {
    try {
      const $ = cheerio.load(response.data)

      const element = $('.bigcontent')
      const elementBox = $('.animefull')
      const elementInfo = $('.infox')
      const elementChapter = $('.bxcl')
      const elementSimilar = $('.listupd')

      let object = {}
      let genres = []
      let chapters = []
      let similar = []

      let title = elementInfo.find('h1').text()
      let thumb = element.find('.thumb img').attr('src')
      let status = elementInfo.find('.spe span').slice(1, 2).text()
      let author = elementInfo.find('.spe span').slice(3, 4).text()
      let type = elementInfo.find('.spe span').slice(4, 5).text()
      let update = elementInfo.find('.spe span').slice(8, 9).text()
      let rating = element.find('.rt .rating strong').text().split(' ')

      let synopsis = elementInfo.find('.desc').text()
      let heading = elementBox.find('.bottom').text()

      elementInfo.find('.spe span a').each((i, e) => {
        let genre = $(e).text()

        genres.push(genre)
      })

      elementChapter.find('ul li').each((i, e) => {
        let obj = {}
        let chapter = $(e).find('.lchx a').text()
        let endpoint = $(e).find('.lchx a').attr('href').split('/')

        obj.chapter = chapter
        obj.endpoint = endpoint[3]

        chapters.push(obj)
      })

      elementSimilar.find('.bs').each((i, e) => {
        let obj = {}
        let title = $(e).find('.bsx a').attr('title')
        let thumb = $(e).find('.bsx a .limit img').attr('src')
        let type = $(e).find('.bsx a .limit .type').text()
        let chapter = $(e).find('.bsx a .bigor .adds .epxs').text()
        let rating = $(e).find('.bsx a .bigor .adds .rating i').text()

        obj.title = title
        obj.thumb = thumb
        obj.type = type || null
        obj.chapter = chapter
        obj.rating = rating

        similar.push(obj)
      })

      object.title = title.trim()
      object.thumb = thumb
      object.genres = genres
      object.author = getInfo(author)
      object.status = getInfo(status)
      object.type = getInfo(type)
      object.update = getInfo(update)
      object.rating = rating[1]
      object.synopsis = synopsis.trim()
      object.heading = getInfo(heading)
      object.chapters = chapters
      object.similar = similar

      return res.send(object)
    } catch (error) {
      return error
    }
  },
  read: async (req, res, response) => {
    try {
      const $ = cheerio.load(response.data)
      const element = $('#readerarea')

      let images = []

      element.find('img').each((i, e) => {
        let img = $(e).attr('src')

        images.push(img)
      })

      return res.send(images)
    } catch (error) {
      return error
    }
  },
}

export default Load
