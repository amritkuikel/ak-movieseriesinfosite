fetch(`/tv?id=${id}`).then((response)=>{
    response.json().then((data)=>{
        const imgurl = 'https://image.tmdb.org/t/p/original'+encodeURIComponent(data.seasons[0].poster_path)
        document.getElementsByClassName('pic')[0].style.backgroundImage=`url('${imgurl}')`
        document.getElementsByClassName('txtseason1')[0].innerHTML=data.seasons[0].name
        document.getElementsByClassName('txtseason2')[0].innerHTML=`${data.seasons[0].air_date.substring(0,4)} | ${data.seasons[0].episode_count} Episodes`
        document.getElementsByClassName('txtseason3')[0].innerHTML=data.seasons[0].overview
    })
})