import express from "express";
import { getTrending, searchMusicHandeler,getSongHandeler } from "../controllers/music-controller";

const router = express.Router();

router.get("/trending", getTrending);
router.get("/search", searchMusicHandeler);
router.get('/playmusic',getSongHandeler)

export default router;
