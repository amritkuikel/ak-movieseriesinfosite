function filler(a){
    for(var i=0;i<20;i++){
        const imagetv= a[i].poster_path
        document.getElementsByClassName('imagetv')[i].src='https://image.tmdb.org/t/p/original'+encodeURIComponent(imagetv)
}
    for(var i=0;i<20;i++){
        const rating= a[i].vote_average
        document.getElementsByClassName('rating')[i].innerHTML=rating
}
    for(var i=0;i<20;i++){
        const nametv= a[i].name
        if(nametv==null){
            const nametv= a[i].title
            document.getElementsByClassName('nametv')[i].innerHTML=nametv
        }
        else{
            document.getElementsByClassName('nametv')[i].innerHTML=nametv
        }
}
    for(var i=0;i<20;i++){
        const releasedatetv= a[i].first_air_date
        if(releasedatetv==null){
            const releasedatetv= a[i].release_date
            document.getElementsByClassName('releasedatetv')[i].innerHTML=releasedatetv
        }
        else{
            document.getElementsByClassName('releasedatetv')[i].innerHTML=releasedatetv
        }
}
}
fetch('/popularTv').then((response)=>{
    response.json().then((data)=>{
        filler(data)
    })
    })
    const btn1 = document.querySelector('.btn1')
    const btn2 = document.querySelector('.btn2')
    btn2.addEventListener('click',()=>{
        btn1.style.backgroundColor='white'
        btn1.style.color='rgb(0, 0, 0)'
        btn2.style.backgroundColor='rgb(3,37,65)'
        btn2.style.color='aqua'
        fetch('/nowPlayingMovie ').then((response)=>{
            response.json().then((data)=>{
                filler(data)
            })
            })
    })
    btn1.addEventListener('click',()=>{
        btn2.style.backgroundColor='white'
        btn2.style.color='rgb(0, 0, 0)'
        btn1.style.backgroundColor='rgb(3,37,65)'
        btn1.style.color='aqua'
        fetch('/popularTv').then((response)=>{
        response.json().then((data)=>{
           filler(data)
        })
        })
       
    })
    