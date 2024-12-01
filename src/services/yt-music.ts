import YTMusic from "ytmusic-api";
const ytmusic = new YTMusic();

export const getTrendingMusic= async()=>{
    await ytmusic.initialize();
    return ytmusic.getHomeSections();
}

export const searchMusic = async (query: string) => {
    await ytmusic.initialize();
    return ytmusic.search(query);
  };

export const getSong = async(songId:string)=>{
    await ytmusic.initialize();

    return ytmusic.getSong(songId);
}