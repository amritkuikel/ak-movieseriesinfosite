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
    const scrollitem = document.getElementsByClassName('scrollitem')
    function fetchingdata(a){
        const btn = document.querySelector('.btn1')
        if(btn.style.color=="rgb(0, 0, 0)"){
            fetch('/nowPlayingMovie').then((response)=>{
                response.json().then((data)=>{
                    const id = data[a].id
                    document.location.href = `/infopage?id=${id}`;
                })
            })
        }
        else{
            fetch('/popularTv').then((response)=>{
                response.json().then((data)=>{
                    const id = data[a].id
                    document.location.href = `/infopage?id=${id}`;
                })
            })
        }
    }
    scrollitem[0].addEventListener('click',()=>{
        fetchingdata(0)
    })
    scrollitem[1].addEventListener('click',()=>{
        fetchingdata(1)
    })
    scrollitem[2].addEventListener('click',()=>{
        fetchingdata(2)
    })
    scrollitem[3].addEventListener('click',()=>{
        fetchingdata(3)
    })
    scrollitem[4].addEventListener('click',()=>{
        fetchingdata(4)
    })
    scrollitem[5].addEventListener('click',()=>{
        fetchingdata(5)
    })
    scrollitem[6].addEventListener('click',()=>{
        fetchingdata(6)
    })
    scrollitem[7].addEventListener('click',()=>{
        fetchingdata(7)
    })
    scrollitem[8].addEventListener('click',()=>{
        fetchingdata(8)
    })
    scrollitem[9].addEventListener('click',()=>{
        fetchingdata(9)
    })
    scrollitem[10].addEventListener('click',()=>{
        fetchingdata(10)
    })
    scrollitem[11].addEventListener('click',()=>{
        fetchingdata(11)
    })
    scrollitem[12].addEventListener('click',()=>{
        fetchingdata(12)
    })
    scrollitem[13].addEventListener('click',()=>{
        fetchingdata(13)
    })
    scrollitem[14].addEventListener('click',()=>{
        fetchingdata(14)
    })
    scrollitem[15].addEventListener('click',()=>{
        fetchingdata(15)
    })
    scrollitem[16].addEventListener('click',()=>{
        fetchingdata(16)
    })
    scrollitem[17].addEventListener('click',()=>{
        fetchingdata(17)
    })
    scrollitem[19].addEventListener('click',()=>{
        fetchingdata(19)
    })
