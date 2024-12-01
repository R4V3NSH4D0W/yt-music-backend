import YTMusic from "ytmusic-api";
const ytmusic = new YTMusic();

const getTrendingMusic= async()=>{
    await ytmusic.initialize();
    return ytmusic.getHomeSections();
}

 const searchMusic = async (query: string) => {
    await ytmusic.initialize();
    return ytmusic.search(query);
  };

 const getSong = async(songId:string)=>{
    await ytmusic.initialize();

    return ytmusic.getSong(songId);
}

 const getAlbum = async(albumId:string)=>{
    await ytmusic.initialize();

    return ytmusic.getAlbum(albumId);
}

const getArtist= async(artistId:string)=>{
    await ytmusic.initialize();

    return ytmusic.getArtist(artistId);
}


export {getTrendingMusic,searchMusic,getSong,getAlbum, getArtist}