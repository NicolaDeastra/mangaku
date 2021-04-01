import express from 'express'

import latestComic from '../controller/latest'

const router = express.Router()

router.get('/', latestComic.getLatest)

export default router
