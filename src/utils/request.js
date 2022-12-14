const request = require('request')
const api = 'ec8a74043584d6c450c2962f6a049d97'

const searchMovie = (query,callback)=>{
    const urlSearchMovie = 'https://api.themoviedb.org/3/search/multi?api_key=ec8a74043584d6c450c2962f6a049d97&language=en-US&query='+encodeURIComponent(api)+'&query='+encodeURIComponent(query)
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
const latestToday = (callback)=>{
    const urllatestToday = 'https://api.themoviedb.org/3/trending/all/day?api_key=ec8a74043584d6c450c2962f6a049d97'
    request({url:urllatestToday},(error,response)=>{
    const json =JSON.parse(response.body)
    callback(undefined,json.results)
})
}
const latestWeek = (callback)=>{
    const urllatestWeek = 'https://api.themoviedb.org/3/trending/all/week?api_key=ec8a74043584d6c450c2962f6a049d97'
    request({url:urllatestWeek},(error,response)=>{
    const json =JSON.parse(response.body)
    callback(undefined,json.results)
})
}
const searchTv = (id,callback)=>{
    const urlsearchtv = 'https://api.themoviedb.org/3/tv/'+encodeURIComponent(id)+'?api_key=ec8a74043584d6c450c2962f6a049d97&language=en-US'
    request({url:urlsearchtv},(error,response)=>{
    const json =JSON.parse(response.body)
    callback(undefined,json)
})
}
const castTv = (id,callback)=>{
    const urlcasttv = 'https://api.themoviedb.org/3/tv/'+encodeURIComponent(id)+'/aggregate_credits?api_key=ec8a74043584d6c450c2962f6a049d97&language=en-US'
    request({url:urlcasttv},(error,response)=>{
    const json =JSON.parse(response.body)
    callback(undefined,json)
})
}
const vidTv = (id,callback)=>{
    const urlvidtv = 'https://api.themoviedb.org/3/tv/'+encodeURIComponent(id)+'/videos?api_key=ec8a74043584d6c450c2962f6a049d97'
    request({url:urlvidtv},(error,response)=>{
    const json =JSON.parse(response.body)
    callback(undefined,json)
})
}
const vidMovie = (id,callback)=>{
    const urlvidMovie = 'https://api.themoviedb.org/3/movie/'+encodeURIComponent(id)+'/videos?api_key=ec8a74043584d6c450c2962f6a049d97'
    request({url:urlvidMovie},(error,response)=>{
    const json =JSON.parse(response.body)
    callback(undefined,json)
})
}
const picTv = (id,callback)=>{
    const urlpictv = 'https://api.themoviedb.org/3/tv/'+encodeURIComponent(id)+'/images?api_key=ec8a74043584d6c450c2962f6a049d97'
    request({url:urlpictv},(error,response)=>{
    const json =JSON.parse(response.body)
    callback(undefined,json)
})
}
const picMovie = (id,callback)=>{
    const urlpicMovie = 'https://api.themoviedb.org/3/movie/'+encodeURIComponent(id)+'/images?api_key=ec8a74043584d6c450c2962f6a049d97'
    request({url:urlpicMovie},(error,response)=>{
    const json =JSON.parse(response.body)
    callback(undefined,json)
})
}
const searchMovi = (id,callback)=>{
    const urlsearchMovi = 'https://api.themoviedb.org/3/movie/'+encodeURIComponent(id)+'?api_key=ec8a74043584d6c450c2962f6a049d97&language=en-US'
    request({url:urlsearchMovi},(error,response)=>{
    const json =JSON.parse(response.body)
    callback(undefined,json)
})
}
const creditMovi = (id,callback)=>{
    const urlcreditMovi = 'https://api.themoviedb.org/3/movie/'+encodeURIComponent(id)+'/credits?api_key=ec8a74043584d6c450c2962f6a049d97'
    request({url:urlcreditMovi},(error,response)=>{
    const json =JSON.parse(response.body)
    callback(undefined,json)
})
}
module.exports = {searchMovie,popularMovie,popularTv,nowPlayingMovie,popularTv2,vidinfo,popularMovie2,vidinfoM,latestToday,latestWeek,searchTv,castTv,vidTv,picTv,searchMovi,creditMovi,vidMovie,picMovie}