const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const btn1L = document.querySelector('.btn1L')
const btn2L = document.querySelector('.btn2L')

btn2.addEventListener('click',()=>{
    btn1.style.backgroundColor='white'
    btn1.style.color='rgb(0, 0, 0)'
    btn2.style.backgroundColor='rgb(3,37,65)'
    btn2.style.color='aqua'
    fetch('/nowPlayingMovie ').then((response)=>{
        response.json().then((data)=>{
             for(var i=0;i<20;i++){
                    const imagetv= data[i].poster_path
                    document.getElementsByClassName('imagetv')[i].src='https://image.tmdb.org/t/p/original'+encodeURIComponent(imagetv)
            }
            for(var i=0;i<20;i++){
                const rating= data[i].vote_average
                document.getElementsByClassName('rating')[i].innerHTML=rating
            }
            for(var i=0;i<20;i++){
                const nametv= data[i].title
                document.getElementsByClassName('nametv')[i].innerHTML=nametv
            }
            for(var i=0;i<20;i++){
                const releasedatetv= data[i].release_date
                document.getElementsByClassName('releasedatetv')[i].innerHTML=releasedatetv
            }
        })
        })
})

btn2L.addEventListener('click',()=>{
    btn1L.style.backgroundColor='white'
    btn1L.style.color='rgb(0, 0, 0)'
    btn2L.style.backgroundColor='rgb(3,37,65)'
    btn2L.style.color='aqua'
    fetch('/latestWeek ').then((response)=>{
        response.json().then((data)=>{
             for(var i=0;i<20;i++){
                    const imagetv= data[i].poster_path
                    document.getElementsByClassName('imagetvL')[i].src='https://image.tmdb.org/t/p/original'+encodeURIComponent(imagetv)
            }
            for(var i=0;i<20;i++){
                const rating=(data[i].vote_average)
                const a = Math.trunc(rating)
                const b = rating*10
                const c = Math.trunc(b%10)
                document.getElementsByClassName('ratingL')[i].innerHTML=`${a}.${c}`
            }
            for(var i=0;i<20;i++){
                const nametv= data[i].title
                document.getElementsByClassName('nametvL')[i].innerHTML=nametv
            }
            for(var i=0;i<20;i++){
                const releasedatetv= data[i].release_date
                document.getElementsByClassName('releasedatetvL')[i].innerHTML=releasedatetv
            }
        })
        })
})
btn1L.addEventListener('click',()=>{
    btn2L.style.backgroundColor='white'
    btn2L.style.color='rgb(0, 0, 0)'
    btn1L.style.backgroundColor='rgb(3,37,65)'
    btn1L.style.color='aqua'
    fetch('/latestToday ').then((response)=>{
        response.json().then((data)=>{
             for(var i=0;i<20;i++){
                    const imagetv= data[i].poster_path
                    document.getElementsByClassName('imagetvL')[i].src='https://image.tmdb.org/t/p/original'+encodeURIComponent(imagetv)
            }
            for(var i=0;i<20;i++){
                const rating=(data[i].vote_average)
                const a = Math.trunc(rating)
                const b = rating*10
                const c = Math.trunc(b%10)
                document.getElementsByClassName('ratingL')[i].innerHTML=`${a}.${c}`
            }
            for(var i=0;i<20;i++){
                const nametv= data[i].title
                document.getElementsByClassName('nametvL')[i].innerHTML=nametv
            }
            for(var i=0;i<20;i++){
                const releasedatetv= data[i].release_date
                document.getElementsByClassName('releasedatetvL')[i].innerHTML=releasedatetv
            }
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
         for(var i=0;i<20;i++){
                const imagetv= data[i].poster_path
                document.getElementsByClassName('imagetv')[i].src='https://image.tmdb.org/t/p/original'+encodeURIComponent(imagetv)
        }
        for(var i=0;i<20;i++){
            const rating= data[i].vote_average
            document.getElementsByClassName('rating')[i].innerHTML=rating
        }
        for(var i=0;i<20;i++){
            const nametv= data[i].name
            document.getElementsByClassName('nametv')[i].innerHTML=nametv
        }
        for(var i=0;i<20;i++){
            const releasedatetv= data[i].first_air_date
            document.getElementsByClassName('releasedatetv')[i].innerHTML=releasedatetv
        }
    })
    })
   
})
function imageFind(i){
    fetch('/popularTv2').then((response)=>{
        response.json().then((data)=>{
            if(data[i].backdrop_path==null){
                const containerimgurl = 'https://image.tmdb.org/t/p/original'+encodeURIComponent(data[i].poster_path)
                return document.getElementsByClassName('overlayT')[0].style.backgroundImage=`url('${containerimgurl}')`
            }
            const containerimgurl = 'https://image.tmdb.org/t/p/original'+encodeURIComponent(data[i].backdrop_path)
            document.getElementsByClassName('overlayT')[0].style.backgroundImage=`url('${containerimgurl}')`
             
        })
    })
}
function imageFind2(i){
    fetch('/popularMovie2').then((response)=>{
        response.json().then((data)=>{
            if(data[i].backdrop_path==null){
                const containerimgurl = 'https://image.tmdb.org/t/p/original'+encodeURIComponent(data[i].poster_path)
                return document.getElementsByClassName('overlayT')[0].style.backgroundImage=`url('${containerimgurl}')`
            }
            const containerimgurl = 'https://image.tmdb.org/t/p/original'+encodeURIComponent(data[i].backdrop_path)
            document.getElementsByClassName('overlayT')[0].style.backgroundImage=`url('${containerimgurl}')`
             
        })
    })
}

const imagetvT = document.getElementsByClassName('imagetvT')
imagetvT[0].addEventListener('mouseover',()=>{
    const btn1TB = document.querySelector('.btn1T')
    if(btn1TB.style.color=='white'){
        imageFind2('0')
    }
    else{
        imageFind('0')
    }
})
imagetvT[1].addEventListener('mouseover',()=>{
    const btn1TB = document.querySelector('.btn1T')
    if(btn1TB.style.color=='white'){
        imageFind2('1')
    }
    else{
        imageFind('1')
    }
})
imagetvT[2].addEventListener('mouseover',()=>{
    const btn1TB = document.querySelector('.btn1T')
    if(btn1TB.style.color=='white'){
        imageFind2('2')
    }
    else{
        imageFind('2')
    }
})
imagetvT[3].addEventListener('mouseover',()=>{
    const btn1TB = document.querySelector('.btn1T')
    if(btn1TB.style.color=='white'){
        imageFind2('3')
    }
    else{
        imageFind('3')
    }
})
imagetvT[4].addEventListener('mouseover',()=>{
    const btn1TB = document.querySelector('.btn1T')
    if(btn1TB.style.color=='white'){
        imageFind2('4')
    }
    else{
        imageFind('4')
    }
})
imagetvT[5].addEventListener('mouseover',()=>{
    const btn1TB = document.querySelector('.btn1T')
    if(btn1TB.style.color=='white'){
        imageFind2('5')
    }
    else{
        imageFind('5')
    }
})
imagetvT[6].addEventListener('mouseover',()=>{
    const btn1TB = document.querySelector('.btn1T')
    if(btn1TB.style.color=='white'){
        imageFind2('6')
    }
    else{
        imageFind('6')
    }
})
imagetvT[7].addEventListener('mouseover',()=>{
    const btn1TB = document.querySelector('.btn1T')
    if(btn1TB.style.color=='white'){
        imageFind2('7')
    }
    else{
        imageFind('7')
    }
})
imagetvT[8].addEventListener('mouseover',()=>{
    const btn1TB = document.querySelector('.btn1T')
    if(btn1TB.style.color=='white'){
        imageFind2('8')
    }
    else{
        imageFind('8')
    }
})
imagetvT[9].addEventListener('mouseover',()=>{
    const btn1TB = document.querySelector('.btn1T')
    if(btn1TB.style.color=='white'){
        imageFind2('9')
    }
    else{
        imageFind('9')
    }
})
imagetvT[10].addEventListener('mouseover',()=>{
    const btn1TB = document.querySelector('.btn1T')
    if(btn1TB.style.color=='white'){
        imageFind2('10')
    }
    else{
        imageFind('10')
    }
})
imagetvT[11].addEventListener('mouseover',()=>{
    const btn1TB = document.querySelector('.btn1T')
    if(btn1TB.style.color=='white'){
        imageFind2('11')
    }
    else{
        imageFind('11')
    }
})
imagetvT[12].addEventListener('mouseover',()=>{
    const btn1TB = document.querySelector('.btn1T')
    if(btn1TB.style.color=='white'){
        imageFind2('12')
    }
    else{
        imageFind('12')
    }
})
imagetvT[13].addEventListener('mouseover',()=>{
    const btn1TB = document.querySelector('.btn1T')
    if(btn1TB.style.color=='white'){
        imageFind2('13')
    }
    else{
        imageFind('13')
    }
})
imagetvT[14].addEventListener('mouseover',()=>{
    const btn1TB = document.querySelector('.btn1T')
    if(btn1TB.style.color=='white'){
        imageFind2('14')
    }
    else{
        imageFind('14')
    }
})





