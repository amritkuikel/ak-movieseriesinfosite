fetch('/popularMovie').then((response)=>{
    response.json().then((data)=>{
        const popularMovie = data
        const randomno = Math.floor(Math.random()*20)
        const image =  data[randomno].backdrop_path
        const imgurl = 'https://image.tmdb.org/t/p/original'+encodeURIComponent(image)
        document.querySelector('header').style.backgroundImage=`url('${imgurl}')`
    })
})