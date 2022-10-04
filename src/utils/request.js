const request = require('request')
const api = 'ec8a74043584d6c450c2962f6a049d97'

const searchMovie = (query,callback)=>{
    const urlSearchMovie = 'https://api.themoviedb.org/3/search/movie?api_key='+encodeURIComponent(api)+'&query='+encodeURIComponent(query)
    request({url:urlSearchMovie},(error,response)=>{
    const json =JSON.parse(response.body)
    callback(undefined,json.results)
})
}
const popularMovie = (callback)=>{
    const urlPopularMovie = 'https://api.themoviedb.org/3/discover/movie?api_key=ec8a74043584d6c450c2962f6a049d97&sort_by=popularity.desc'
    request({url:urlPopularMovie},(error,response)=>{
    const json =JSON.parse(response.body)
    callback(undefined,json.results)
})
}
const popularTv = (callback)=>{
    const urlPopularTv = 'https://api.themoviedb.org/3/discover/tv?api_key=ec8a74043584d6c450c2962f6a049d97&sort_by=popularity.desc'
    request({url:urlPopularTv},(error,response)=>{
    const json =JSON.parse(response.body)
    callback(undefined,json.results)
})
}
const nowPlayingMovie = (callback)=>{
    const urlnowPlayingMovie = 'https://api.themoviedb.org/3/movie/now_playing?api_key=ec8a74043584d6c450c2962f6a049d97'
    request({url:urlnowPlayingMovie},(error,response)=>{
    const json =JSON.parse(response.body)
    callback(undefined,json.results)
})
}
const popularTv2 = (callback)=>{
    const urlPopularTv2 = 'https://api.themoviedb.org/3/discover/tv?api_key=ec8a74043584d6c450c2962f6a049d97&page=2'
    request({url:urlPopularTv2},(error,response)=>{
    const json =JSON.parse(response.body)
    callback(undefined,json.results)
})
}
const popularMovie2 = (callback)=>{
    const urlPopularMovie2 = 'https://api.themoviedb.org/3/movie/now_playing?api_key=ec8a74043584d6c450c2962f6a049d97&page=2'
    request({url:urlPopularMovie2},(error,response)=>{
    const json =JSON.parse(response.body)
    callback(undefined,json.results)
})
}
const vidinfo = (id,callback)=>{
    const urlvidinfo = 'https://api.themoviedb.org/3/tv/'+encodeURIComponent(id)+'/videos?api_key=ec8a74043584d6c450c2962f6a049d97&language=en-US'
    request({url:urlvidinfo},(error,response)=>{
    const json =JSON.parse(response.body)
    callback(undefined,json.results)
})
}
const vidinfoM = (id,callback)=>{
    const urlvidinfoM = 'https://api.themoviedb.org/3/movie/'+encodeURIComponent(id)+'/videos?api_key=ec8a74043584d6c450c2962f6a049d97&language=en-US'
    request({url:urlvidinfoM},(error,response)=>{
    const json =JSON.parse(response.body)
    callback(undefined,json.results)
})
}
module.exports = {searchMovie,popularMovie,popularTv,nowPlayingMovie,popularTv2,vidinfo,popularMovie2,vidinfoM}
