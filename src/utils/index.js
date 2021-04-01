import cheerio from 'cheerio'

const Load = {
  articles: async (req, res, response) => {
    try {
      const $ = cheerio.load(response.data)
      const element = $('.listupd')

      let title
      let thumb
      let tag
      let author
      let time
      let href
      let desc
      let endpoint
      let img

      let media = []

      element.find('.animposx').each((i, e) => {
        title = $(e).find('.bigor a div h4').text()
        img = $(e).find('a div img').attr('src')
        // thumb = img.replace('360', '480').replace('180', '280')
        // href = $(e).find('.jeg_thumb a').attr('href').split('/')
        // endpoint = href[3]
        // time = $()
        //   .find('.jeg_postblock_content .jeg_post_meta .jeg_meta_date a')
        //   .text()

        media.push({
          title,
          img,
        })
      })

      return res.send(media)
    } catch (error) {
      return error
    }
  },
}

export default Load
