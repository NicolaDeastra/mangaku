import express from 'express'

import comic from '../controller/comic'

const router = express.Router()

router.get('/latest', comic.getLatest)

export default router
