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

