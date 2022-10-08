function vidinfoTv(b,a) {
    fetch('/vidinfo?id='+encodeURIComponent(b[a].id)).then((response)=>{
        response.json().then((data1)=>{
        if(data1.length==0){
            document.getElementsByClassName('vidinfo')[a].innerHTML= 'Unavailable'
        }
        else{
            const vidinfo = data1[0].type
            document.getElementsByClassName('vidinfo')[a].innerHTML= vidinfo 
        }
        })
        })
}
function vidinfoMovie(b,a) {
    fetch('/vidinfoM?id='+encodeURIComponent(b[a].id)).then((response)=>{
        response.json().then((data1)=>{
        if(data1.length==0){
            document.getElementsByClassName('vidinfo')[a].innerHTML= 'Unavailable'
        }
        else{
            const vidinfo = data1[0].type
            document.getElementsByClassName('vidinfo')[a].innerHTML= vidinfo 
        }
        })
        })
}


fetch('/popularTv2').then((response)=>{
    response.json().then((data)=>{
        const containerimgurl = 'https://image.tmdb.org/t/p/original'+encodeURIComponent(data[0].backdrop_path)
        document.getElementsByClassName('overlayT')[0].style.backgroundImage=`url('${containerimgurl}')`
        for(var i=0;i<15;i++){
            if(data[i].backdrop_path==null){
                const imagetvT= data[i].poster_path
                document.getElementsByClassName('imagetvT')[i].src='https://image.tmdb.org/t/p/original'+encodeURIComponent(imagetvT)
            }
            else{
                const imagetvT= data[i].backdrop_path
                document.getElementsByClassName('imagetvT')[i].src='https://image.tmdb.org/t/p/original'+encodeURIComponent(imagetvT)
            }  
            const nametvT= data[i].name
            document.getElementsByClassName('nametvT')[i].innerHTML=nametvT 
            vidinfoTv(data,i)
        }
        
    })
    })

const btn1T = document.querySelector('.btn1T')
const btn2T = document.querySelector('.btn2T')
btn2T.addEventListener('click',()=>{
    for(i=0;i<15;i++){
        document.getElementsByClassName('textplay')[i].innerHTML="Click To Play!"
    }
    btn1T.style.backgroundColor='rgba(243, 229, 229, 0)'
    btn1T.style.color='white'
    btn2T.style.backgroundColor='rgb(7, 134, 98'
    btn2T.style.color='rgb(0, 0, 0)'
    fetch('/popularMovie2').then((response)=>{
        response.json().then((data)=>{
        const containerimgurl = 'https://image.tmdb.org/t/p/original'+encodeURIComponent(data[0].backdrop_path)
        document.getElementsByClassName('overlayT')[0].style.backgroundImage=`url('${containerimgurl}')`
        for(var i=0;i<15;i++){
            if(data[i].backdrop_path==null){
                const imagetvT= data[i].poster_path
                document.getElementsByClassName('imagetvT')[i].src='https://image.tmdb.org/t/p/original'+encodeURIComponent(imagetvT)
            }
            else{
                const imagetvT= data[i].backdrop_path
                document.getElementsByClassName('imagetvT')[i].src='https://image.tmdb.org/t/p/original'+encodeURIComponent(imagetvT) 
            }
            const nametvT= data[i].title
            document.getElementsByClassName('nametvT')[i].innerHTML=nametvT 
            vidinfoMovie(data,i)
         }
    })
    })
})
btn1T.addEventListener('click',()=>{
    for(i=0;i<15;i++){
        document.getElementsByClassName('textplay')[i].innerHTML="Click To Play!"
    }
    btn2T.style.backgroundColor='rgba(243, 229, 229, 0)'
    btn2T.style.color='white'
    btn1T.style.backgroundColor='rgb(7, 134, 98'
    btn1T.style.color='rgb(0, 0, 0)'
    fetch('/popularTv2').then((response)=>{
        response.json().then((data)=>{
            const containerimgurl = 'https://image.tmdb.org/t/p/original'+encodeURIComponent(data[0].backdrop_path)
            document.getElementsByClassName('overlayT')[0].style.backgroundImage=`url('${containerimgurl}')`
            for(var i=0;i<15;i++){
                if(data[i].backdrop_path==null){
                    const imagetvT= data[i].poster_path
                    document.getElementsByClassName('imagetvT')[i].src='https://image.tmdb.org/t/p/original'+encodeURIComponent(imagetvT)
                }
                else{
                    const imagetvT= data[i].backdrop_path
                    document.getElementsByClassName('imagetvT')[i].src='https://image.tmdb.org/t/p/original'+encodeURIComponent(imagetvT)
                }  
                const nametvT= data[i].name
                document.getElementsByClassName('nametvT')[i].innerHTML=nametvT 
                vidinfo(data,i)
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

function imageSelector(a){
    const btn1TB = document.querySelector('.btn1T')
    if(btn1TB.style.color=='white'){
        imageFind2(a)
    }
    else{
        imageFind(a)
    }
}

const imagetvT = document.getElementsByClassName('imagetvT')
imagetvT[0].addEventListener('mouseover',()=>{
    imageSelector(0)
})
imagetvT[1].addEventListener('mouseover',()=>{
    imageSelector(1)
})
imagetvT[2].addEventListener('mouseover',()=>{
    imageSelector(2)
})
imagetvT[3].addEventListener('mouseover',()=>{
    imageSelector(3)
})
imagetvT[4].addEventListener('mouseover',()=>{
    imageSelector(4)
})
imagetvT[5].addEventListener('mouseover',()=>{
    imageSelector(5)
})
imagetvT[6].addEventListener('mouseover',()=>{
    imageSelector(6)
})
imagetvT[7].addEventListener('mouseover',()=>{
    imageSelector(7)
})
imagetvT[8].addEventListener('mouseover',()=>{
    imageSelector(8)
})
imagetvT[9].addEventListener('mouseover',()=>{
    imageSelector(9)
})
imagetvT[10].addEventListener('mouseover',()=>{
    imageSelector(10)
})
imagetvT[11].addEventListener('mouseover',()=>{
    imageSelector(11)
})
imagetvT[12].addEventListener('mouseover',()=>{
    imageSelector(12)
})
imagetvT[13].addEventListener('mouseover',()=>{
    imageSelector(13)
})
imagetvT[14].addEventListener('mouseover',()=>{
    imageSelector(14)
})


const playholder = document.getElementsByClassName('playholder')
const play = document.getElementsByClassName('play')

function playmgr(a){
        const btn1TA = document.querySelector('.btn1T')
        if(btn1TA.style.color=='white'){
            fetch('/popularMovie2').then((response)=>{
                response.json().then((data)=>{
                    const id= data[a].id
                    fetch('/vidinfoM?id='+encodeURIComponent(id)).then((response)=>{
                    response.json().then((data1)=>{
                        if(data1[0]==null){
                            return document.getElementsByClassName('textplay')[a].innerHTML="Can Not play"
                        }
                        const key= data1[0].key
                        document.getElementsByClassName('frame')[0].src='https://www.youtube.com/embed/'+encodeURIComponent(key)
                        document.getElementsByClassName('frame')[0].style.display='block'
                        document.getElementsByClassName('cancel')[0].style.display='block'
                    })
                    })
                })
            })
        }
        else{
            fetch('/popularTv2').then((response)=>{
        response.json().then((data)=>{
            const id= data[a].id
            fetch('/vidinfo?id='+encodeURIComponent(id)).then((response)=>{
            response.json().then((data1)=>{
                if(data1[0]==null){
                    return document.getElementsByClassName('textplay')[a].innerHTML="Can Not play"
                }
                const key= data1[0].key
                document.getElementsByClassName('frame')[0].src='https://www.youtube.com/embed/'+encodeURIComponent(key)
                document.getElementsByClassName('frame')[0].style.display='block'
                document.getElementsByClassName('cancel')[0].style.display='block'
            })
            })
        })
        })
    }
}
 play[0].addEventListener('click',()=>{
    playmgr(0)
 })
 play[1].addEventListener('click',()=>{
    playmgr(1)
 })
 play[2].addEventListener('click',()=>{
    playmgr(2)
 })
 play[3].addEventListener('click',()=>{
    playmgr(3)
 })
 play[4].addEventListener('click',()=>{
    playmgr(4)
 })
 play[5].addEventListener('click',()=>{
    playmgr(5)
 })
 play[6].addEventListener('click',()=>{
    playmgr(6)
 })
 play[7].addEventListener('click',()=>{
    playmgr(7)
 })
 play[8].addEventListener('click',()=>{
    playmgr(8)
 })
 play[9].addEventListener('click',()=>{
    playmgr(9)
 })
 play[10].addEventListener('click',()=>{
    playmgr(10)
 })
 play[11].addEventListener('click',()=>{
    playmgr(11)
 })
 play[12].addEventListener('click',()=>{
    playmgr(12)
 })
 play[13].addEventListener('click',()=>{
    playmgr(13)
 })
 play[14].addEventListener('click',()=>{
    playmgr(14)
 })

 playholder[0].addEventListener('click',()=>{
   playmgr(0)
})
playholder[1].addEventListener('click',()=>{
   playmgr(1)
})
playholder[2].addEventListener('click',()=>{
   playmgr(2)
})
playholder[3].addEventListener('click',()=>{
   playmgr(3)
})
playholder[4].addEventListener('click',()=>{
   playmgr(4)
})
playholder[5].addEventListener('click',()=>{
   playmgr(5)
})
playholder[6].addEventListener('click',()=>{
   playmgr(6)
})
playholder[7].addEventListener('click',()=>{
   playmgr(7)
})
playholder[8].addEventListener('click',()=>{
   playmgr(8)
})
playholder[9].addEventListener('click',()=>{
   playmgr(9)
})
playholder[10].addEventListener('click',()=>{
   playmgr(10)
})
playholder[11].addEventListener('click',()=>{
   playmgr(11)
})
playholder[12].addEventListener('click',()=>{
   playmgr(12)
})
playholder[13].addEventListener('click',()=>{
   playmgr(13)
})
playholder[14].addEventListener('click',()=>{
   playmgr(14)
})

const cancel = document.getElementsByClassName('cancel')
cancel[0].addEventListener('click',()=>{
    document.getElementsByClassName('frame')[0].style.display='none'
    document.getElementsByClassName('cancel')[0].style.display='none'
    document.getElementsByClassName('frame')[0].src=null
})


