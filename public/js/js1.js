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

const trendingresult = document.getElementsByClassName('trendingresult')
fetch('/latestToday').then((response)=>{
   response.json().then((data)=>{
      for(i=0;i<10;i++){
         if(data[i].name==null){
            trendingresult[i].innerHTML=data[i].title
         }
         else{
            trendingresult[i].innerHTML=data[i].name
         }
         
      }
   })
})

document.querySelector('.dropdownS').addEventListener('click',()=>{
   if(document.querySelector('.dropdown-search').style.display == "none"){
      document.querySelector('.dropdown-search').style.display = "block"
      document.querySelector('.search').style.backgroundImage= "url('../assests/cancel.png')"
   }
   else{
      document.querySelector('.dropdown-search').style.display = "none"
      document.querySelector('.search').style.backgroundImage= "url('../assests/search.png')"
   }
})

