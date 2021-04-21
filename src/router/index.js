import express from 'express'

import comic from '../controller/comic'

const router = express.Router()

router.get('/latest', comic.getLatest)
router.get('/popular', comic.getPopular)
router.get('/color', comic.getColor)
router.get('/detail/:endpoint', comic.getDetail)

router.get('/search', comic.getSearch)

router.get('/manga', comic.getManga)
router.get('/manhua', comic.getManhua)
router.get('/manhwa', comic.getManhwa)

router.get('/genre/action', comic.getAction)
router.get('/genre/adventure', comic.getAdventure)
router.get('/genre/comedy', comic.getComedy)
router.get('/genre/drama', comic.getDrama)
router.get('/genre/fantasy', comic.getFantasy)
router.get('/genre/isekai', comic.getIsekai)
router.get('/genre/slice-of-life', comic.getSliceOfLife)
router.get('/genre/romance', comic.getRomance)
router.get('/genre/yuri', comic.getYuri)
router.get('/genre/mystery', comic.getMystery)
router.get('/genre/psychological', comic.getMystery)
router.get('/genre/sci-fi', comic.getSciFi)

export default router
