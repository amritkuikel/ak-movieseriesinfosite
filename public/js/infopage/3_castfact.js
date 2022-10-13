fetch('/castTv?id=113988').then((response)=>{
    response.json().then((data)=>{
        for(i=0;i<5;i++){
            const imgurl = 'https://image.tmdb.org/t/p/original'+encodeURIComponent(data.cast[i].profile_path)
            document.getElementsByClassName('castimage')[i].style.backgroundImage=`url('${imgurl}')`
            document.getElementsByClassName('realname')[i].innerHTML=data.cast[i].name
            document.getElementsByClassName('reelname')[i].innerHTML=data.cast[i].roles[0].character
            document.getElementsByClassName('noofepisodes')[i].innerHTML=`${data.cast[i].roles[0].episode_count } Episodes`
        }
    })
})
fetch('/tv?id=113988').then((response)=>{
    response.json().then((data)=>{
        document.getElementsByClassName('link')[0].href=data.homepage
        if(data.in_production==false){
            document.getElementsByClassName('statusinfo')[0].innerHTML='Ended'
        }
        else{
            document.getElementsByClassName('statusinfo')[0].innerHTML='Running'
        }
        const imgurl = 'https://image.tmdb.org/t/p/original'+encodeURIComponent(data.networks[0].logo_path)
        document.getElementsByClassName('networklogo')[0].style.backgroundImage=`url('${imgurl}')`
        document.getElementsByClassName('typeinfo')[0].innerHTML=data.type
        document.getElementsByClassName('langaugeinfo')[0].innerHTML=data.spoken_languages[0].english_name
    })
})