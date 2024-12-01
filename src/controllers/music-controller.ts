import { Request, Response } from "express";
import { getSong, getTrendingMusic, searchMusic } from "../services/yt-music";

export const getTrending= async(_req:Request,res:Response)=>{
   try{
    const trendingMusic= await getTrendingMusic();
    res.status(200).json(trendingMusic);
   }catch(error){
    res.status(500).json({error:"failed To Fetch Trending Music"})
   }
}

export const searchMusicHandeler = async (req: Request, res: Response ): Promise<void> => {
    const query = req.query.q as string;
    if (!query) {
       res.status(400).json({ error: "Please provide a search query" });
    }
    try {
      const searchResults = await searchMusic(query);
      res.status(200).json(searchResults);
    } catch (error) {
      res.status(500).json({ error: "Failed to search music" });
    }
  };

  export const getSongHandeler = async(req:Request, res:Response):Promise<void>=>{
    const songId= req.query.id as string;
    if(!songId){
        res.status(400).json({error:"please Provide Song ID"})
    }
    try{
        const songResult = await getSong(songId);
        res.status(200).json(songResult)
    }catch(error){
        res.status(500).json({error:"failed to get song"})
    }
  }