function filler2(a){
    fetch(`/latest${a}`).then((response)=>{
        response.json().then((data)=>{
            for(i=0;i<20;i++){
                const imagetv= data[i].poster_path
                document.getElementsByClassName('imagetvL')[i].src='https://image.tmdb.org/t/p/original'+encodeURIComponent(imagetv)
                const rating=(data[i].vote_average)
                const a = Math.trunc(rating)
                const b = rating*10
                const c = Math.trunc(b%10)
                document.getElementsByClassName('ratingL')[i].innerHTML=`${a}.${c}`
                if(data[i].title==null){
                    const nametv= data[i].name
                    document.getElementsByClassName('nametvL')[i].innerHTML=nametv
                }
                else{
                    const nametv= data[i].title
                    document.getElementsByClassName('nametvL')[i].innerHTML=nametv
                }
                if(data[i].title==null){
                    const releasedatetv= data[i].first_air_date
                    document.getElementsByClassName('releasedatetvL')[i].innerHTML=releasedatetv
                }
                else{
                    const releasedatetv= data[i].release_date
                document.getElementsByClassName('releasedatetvL')[i].innerHTML=releasedatetv
                }
            }
        })
    })
}
filler2('Today')


const btn1L = document.querySelector('.btn1L')
const btn2L = document.querySelector('.btn2L')
btn2L.addEventListener('click',()=>{
    btn1L.style.backgroundColor='white'
    btn1L.style.color='rgb(0, 0, 0)'
    btn2L.style.backgroundColor='rgb(3,37,65)'
    btn2L.style.color='aqua'
   filler2('Week')
})
btn1L.addEventListener('click',()=>{
    btn2L.style.backgroundColor='white'
    btn2L.style.color='rgb(0, 0, 0)'
    btn1L.style.backgroundColor='rgb(3,37,65)'
    btn1L.style.color='aqua'
    filler2('Today')
})
const scrollitemL = document.getElementsByClassName('scrollitemL')
function fetchingdataL(a){
    const btnL = document.querySelector('.btn1L')
    if(btnL.style.color=="rgb(0, 0, 0)"){
        fetch('/latestWeek').then((response)=>{
            response.json().then((data)=>{
                const id = data[a].id
                document.location.href = `/infopage?id=${id}`;
            })
        })
    }
    else{
        fetch('/latestToday').then((response)=>{
            response.json().then((data)=>{
                const id = data[a].id
                document.location.href = `/infopage?id=${id}`;
            })
        })
    }
}
scrollitemL[0].addEventListener('click',()=>{
    fetchingdataL(0)
})
scrollitemL[1].addEventListener('click',()=>{
    fetchingdataL(1)
})
scrollitemL[2].addEventListener('click',()=>{
    fetchingdataL(2)
})
scrollitemL[3].addEventListener('click',()=>{
    fetchingdataL(3)
})
scrollitemL[4].addEventListener('click',()=>{
    fetchingdataL(4)
})
scrollitemL[5].addEventListener('click',()=>{
    fetchingdataL(5)
})
scrollitemL[6].addEventListener('click',()=>{
    fetchingdataL(6)
})
scrollitemL[7].addEventListener('click',()=>{
    fetchingdataL(7)
})
scrollitemL[8].addEventListener('click',()=>{
    fetchingdataL(8)
})
scrollitemL[9].addEventListener('click',()=>{
    fetchingdataL(9)
})
scrollitemL[10].addEventListener('click',()=>{
    fetchingdataL(10)
})
scrollitemL[11].addEventListener('click',()=>{
    fetchingdataL(11)
})
scrollitemL[12].addEventListener('click',()=>{
    fetchingdataL(12)
})
scrollitemL[13].addEventListener('click',()=>{
    fetchingdataL(13)
})
scrollitemL[14].addEventListener('click',()=>{
    fetchingdataL(14)
})
scrollitemL[15].addEventListener('click',()=>{
    fetchingdataL(15)
})
scrollitemL[16].addEventListener('click',()=>{
    fetchingdataL(16)
})
scrollitemL[17].addEventListener('click',()=>{
    fetchingdataL(17)
})
scrollitemL[19].addEventListener('click',()=>{
    fetchingdataL(19)
})


