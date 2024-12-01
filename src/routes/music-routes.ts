import express from "express";
import { getTrending, searchMusicHandeler,getSongHandeler, getArtistHandeler, getAlbumHandeler } from "../controllers/music-controller";

const router = express.Router();

router.get("/trending", getTrending);
router.get("/search", searchMusicHandeler);
router.get('/playmusic',getSongHandeler)
router.get('/artist',getArtistHandeler)
router.get('/album',getAlbumHandeler)

export default router;
