const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')

btn2.addEventListener('click',()=>{
    btn1.style.backgroundColor='white'
    btn1.style.color='rgb(0, 0, 0)'
    btn2.style.backgroundColor='rgb(3,37,65)'
    btn2.style.color='aqua'
    fetch('http://localhost:3000/nowPlayingMovie ').then((response)=>{
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

btn1.addEventListener('click',()=>{
    btn2.style.backgroundColor='white'
    btn2.style.color='rgb(0, 0, 0)'
    btn1.style.backgroundColor='rgb(3,37,65)'
    btn1.style.color='aqua'
    fetch('http://localhost:3000/popularTv').then((response)=>{
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
    fetch('http://localhost:3000/popularTv2').then((response)=>{
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
    imageFind('0')
})
imagetvT[1].addEventListener('mouseover',()=>{
    imageFind('1')
})
imagetvT[2].addEventListener('mouseover',()=>{
    imageFind('2')
})
imagetvT[3].addEventListener('mouseover',()=>{
    imageFind('3')
})
imagetvT[4].addEventListener('mouseover',()=>{
    imageFind('4')
})
imagetvT[5].addEventListener('mouseover',()=>{
    imageFind('5')
})
imagetvT[6].addEventListener('mouseover',()=>{
    imageFind('6')
})
imagetvT[7].addEventListener('mouseover',()=>{
    imageFind('7')
})
imagetvT[8].addEventListener('mouseover',()=>{
    imageFind('8')
})
imagetvT[9].addEventListener('mouseover',()=>{
    imageFind('9')
})
imagetvT[10].addEventListener('mouseover',()=>{
    imageFind('10')
})
imagetvT[11].addEventListener('mouseover',()=>{
    imageFind('11')
})
imagetvT[12].addEventListener('mouseover',()=>{
    imageFind('12')
})
imagetvT[13].addEventListener('mouseover',()=>{
    imageFind('13')
})
imagetvT[14].addEventListener('mouseover',()=>{
    imageFind('14')
})





