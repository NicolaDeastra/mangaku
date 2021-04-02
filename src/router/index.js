import express from 'express'

import comic from '../controller/comic'

const router = express.Router()

router.get('/latest', comic.getLatest)
router.get('/popular', comic.getPopular)
router.get('/color', comic.getColor)

router.get('/genre/action', comic.getAction)
router.get('/genre/adventure', comic.getAdventure)
router.get('/genre/comedy', comic.getComedy)

export default router
