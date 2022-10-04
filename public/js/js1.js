const playholder = document.getElementsByClassName('playholder')

function playmgr(a){
        const btn1TA = document.querySelector('.btn1T')
        if(btn1T.style.color=='white'){
            fetch('http://localhost:3000/popularMovie2').then((response)=>{
                response.json().then((data)=>{
                    const id= data[a].id
                    fetch('http://localhost:3000/vidinfoM?id='+encodeURIComponent(id)).then((response)=>{
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
            fetch('http://localhost:3000/popularTv2').then((response)=>{
        response.json().then((data)=>{
            const id= data[a].id
            fetch('http://localhost:3000/vidinfo?id='+encodeURIComponent(id)).then((response)=>{
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

