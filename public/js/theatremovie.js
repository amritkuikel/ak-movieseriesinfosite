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
         }
        for(var i=0;i<15;i++){
            const nametvT= data[i].title
            document.getElementsByClassName('nametvT')[i].innerHTML=nametvT    
            }
        fetch('/vidinfoM?id='+encodeURIComponent(data[0].id)).then((response)=>{
            response.json().then((data3)=>{
            if(data3.length==0){
                return document.getElementsByClassName('vidinfo')[0].innerHTML= 'Unavailable'
                }
            const vidinfo = data3[0].type
            document.getElementsByClassName('vidinfo')[0].innerHTML= vidinfo 
            })
            })
         fetch('/vidinfoM?id='+encodeURIComponent(data[1].id)).then((response)=>{
            response.json().then((data)=>{
            if(data.length==0){
                return document.getElementsByClassName('vidinfo')[1].innerHTML= 'Unavailable'
                }
                const vidinfo = data[0].type
                document.getElementsByClassName('vidinfo')[1].innerHTML= vidinfo 
            })
            })
         fetch('/vidinfoM?id='+encodeURIComponent(data[2].id)).then((response)=>{
            response.json().then((data)=>{
            if(data.length==0){
                return document.getElementsByClassName('vidinfo')[2].innerHTML= 'Unavailable'
                }
                const vidinfo = data[0].type
                document.getElementsByClassName('vidinfo')[2].innerHTML= vidinfo 
            })
            })
        fetch('/vidinfoM?id='+encodeURIComponent(data[3].id)).then((response)=>{
            response.json().then((data)=>{
            if(data.length==0){
                return document.getElementsByClassName('vidinfo')[3].innerHTML= 'Unavailable'
                }
                const vidinfo = data[0].type
                document.getElementsByClassName('vidinfo')[3].innerHTML= vidinfo 
            })
            })
    fetch('/vidinfoM?id='+encodeURIComponent(data[4].id)).then((response)=>{
            response.json().then((data)=>{
            if(data.length==0){
                return document.getElementsByClassName('vidinfo')[4].innerHTML= 'Unavailable'
                }
                const vidinfo = data[0].type
                document.getElementsByClassName('vidinfo')[4].innerHTML= vidinfo 
            })
            })
    fetch('/vidinfoM?id='+encodeURIComponent(data[5].id)).then((response)=>{
        response.json().then((data2)=>{
            if(data2.length==0){
                return document.getElementsByClassName('vidinfo')[5].innerHTML= 'Unavailable'
                }
                const vidinfo = data2[0].type
                document.getElementsByClassName('vidinfo')[5].innerHTML= vidinfo 
            })
            })
    fetch('/vidinfoM?id='+encodeURIComponent(data[6].id)).then((response)=>{
        response.json().then((data2)=>{
            if(data2.length==0){
                return document.getElementsByClassName('vidinfo')[6].innerHTML= 'Unavailable'
                }
                const vidinfo = data2[0].type
                document.getElementsByClassName('vidinfo')[6].innerHTML= vidinfo 
            })
            })
    fetch('/vidinfoM?id='+encodeURIComponent(data[7].id)).then((response)=>{
        response.json().then((data2)=>{
            if(data2.length==0){
                return document.getElementsByClassName('vidinfo')[7].innerHTML= 'Unavailable'
                }
                const vidinfo = data2[0].type
                document.getElementsByClassName('vidinfo')[7].innerHTML= vidinfo 
            })
            })
                   fetch('/vidinfoM?id='+encodeURIComponent(data[8].id)).then((response)=>{
            response.json().then((data)=>{
            if(data.length==0){
                return document.getElementsByClassName('vidinfo')[8].innerHTML= 'Unavailable'
                }
                const vidinfo = data[0].type
                document.getElementsByClassName('vidinfo')[8].innerHTML= vidinfo 
            })
            })
         fetch('/vidinfoM?id='+encodeURIComponent(data[9].id)).then((response)=>{
            response.json().then((data)=>{
            if(data.length==0){
                return document.getElementsByClassName('vidinfo')[9].innerHTML= 'Unavailable'
                }
                const vidinfo = data[0].type
                document.getElementsByClassName('vidinfo')[9].innerHTML= vidinfo 
            })
            })
         fetch('/vidinfoM?id='+encodeURIComponent(data[10].id)).then((response)=>{
            response.json().then((data)=>{
            if(data.length==0){
                return document.getElementsByClassName('vidinfo')[10].innerHTML= 'Unavailable'
                }
                const vidinfo = data[0].type
                document.getElementsByClassName('vidinfo')[10].innerHTML= vidinfo 
            })
            })
        fetch('/vidinfoM?id='+encodeURIComponent(data[11].id)).then((response)=>{
            response.json().then((data)=>{
            if(data.length==0){
                return document.getElementsByClassName('vidinfo')[11].innerHTML= 'Unavailable'
                }
                const vidinfo = data[0].type
                document.getElementsByClassName('vidinfo')[11].innerHTML= vidinfo 
            })
            })
    fetch('/vidinfoM?id='+encodeURIComponent(data[12].id)).then((response)=>{
            response.json().then((data)=>{
            if(data.length==0){
                return document.getElementsByClassName('vidinfo')[12].innerHTML= 'Unavailable'
                }
                const vidinfo = data[0].type
                document.getElementsByClassName('vidinfo')[12].innerHTML= vidinfo 
            })
            })
    fetch('/vidinfoM?id='+encodeURIComponent(data[13].id)).then((response)=>{
            response.json().then((data)=>{
            if(data.length==0){
                return document.getElementsByClassName('vidinfo')[13].innerHTML= 'Unavailable'
                }
                const vidinfo = data[0].type
                document.getElementsByClassName('vidinfo')[13].innerHTML= vidinfo 
            })
            })
    fetch('/vidinfoM?id='+encodeURIComponent(data[14].id)).then((response)=>{
            response.json().then((data)=>{
            if(data.length==0){
                return document.getElementsByClassName('vidinfo')[14].innerHTML= 'Unavailable'
                }
                const vidinfo = data[0].type
                document.getElementsByClassName('vidinfo')[14].innerHTML= vidinfo 
            })
            })
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
         }
        for(var i=0;i<15;i++){
            const nametvT= data[i].name
            document.getElementsByClassName('nametvT')[i].innerHTML=nametvT    
            }
        fetch('/vidinfo?id='+encodeURIComponent(data[0].id)).then((response)=>{
            response.json().then((data)=>{
            if(data.length==0){
                return document.getElementsByClassName('vidinfo')[0].innerHTML= 'Unavailable'
                }
                const vidinfo = data[0].type
                document.getElementsByClassName('vidinfo')[0].innerHTML= vidinfo 
            })
            })
         fetch('/vidinfo?id='+encodeURIComponent(data[1].id)).then((response)=>{
            response.json().then((data)=>{
            if(data.length==0){
                return document.getElementsByClassName('vidinfo')[1].innerHTML= 'Unavailable'
                }
                const vidinfo = data[0].type
                document.getElementsByClassName('vidinfo')[1].innerHTML= vidinfo 
            })
            })
         fetch('/vidinfo?id='+encodeURIComponent(data[2].id)).then((response)=>{
            response.json().then((data)=>{
            if(data.length==0){
                return document.getElementsByClassName('vidinfo')[2].innerHTML= 'Unavailable'
                }
                const vidinfo = data[0].type
                document.getElementsByClassName('vidinfo')[2].innerHTML= vidinfo 
            })
            })
        fetch('/vidinfo?id='+encodeURIComponent(data[3].id)).then((response)=>{
            response.json().then((data)=>{
            if(data.length==0){
                return document.getElementsByClassName('vidinfo')[3].innerHTML= 'Unavailable'
                }
                const vidinfo = data[0].type
                document.getElementsByClassName('vidinfo')[3].innerHTML= vidinfo 
            })
            })
    fetch('/vidinfo?id='+encodeURIComponent(data[4].id)).then((response)=>{
            response.json().then((data)=>{
            if(data.length==0){
                return document.getElementsByClassName('vidinfo')[4].innerHTML= 'Unavailable'
                }
                const vidinfo = data[0].type
                document.getElementsByClassName('vidinfo')[4].innerHTML= vidinfo 
            })
            })
    fetch('/vidinfo?id='+encodeURIComponent(data[5].id)).then((response)=>{
        response.json().then((data2)=>{
            if(data2.length==0){
                return document.getElementsByClassName('vidinfo')[5].innerHTML= 'Unavailable'
                }
                const vidinfo = data2[0].type
                document.getElementsByClassName('vidinfo')[5].innerHTML= vidinfo 
            })
            })
    fetch('/vidinfo?id='+encodeURIComponent(data[6].id)).then((response)=>{
        response.json().then((data2)=>{
            if(data2.length==0){
                return document.getElementsByClassName('vidinfo')[6].innerHTML= 'Unavailable'
                }
                const vidinfo = data2[0].type
                document.getElementsByClassName('vidinfo')[6].innerHTML= vidinfo 
            })
            })
    fetch('/vidinfo?id='+encodeURIComponent(data[7].id)).then((response)=>{
        response.json().then((data2)=>{
            if(data2.length==0){
                return document.getElementsByClassName('vidinfo')[7].innerHTML= 'Unavailable'
                }
                const vidinfo = data2[0].type
                document.getElementsByClassName('vidinfo')[7].innerHTML= vidinfo 
            })
            })
                   fetch('/vidinfo?id='+encodeURIComponent(data[8].id)).then((response)=>{
            response.json().then((data)=>{
            if(data.length==0){
                return document.getElementsByClassName('vidinfo')[8].innerHTML= 'Unavailable'
                }
                const vidinfo = data[0].type
                document.getElementsByClassName('vidinfo')[8].innerHTML= vidinfo 
            })
            })
         fetch('/vidinfo?id='+encodeURIComponent(data[9].id)).then((response)=>{
            response.json().then((data)=>{
            if(data.length==0){
                return document.getElementsByClassName('vidinfo')[9].innerHTML= 'Unavailable'
                }
                const vidinfo = data[0].type
                document.getElementsByClassName('vidinfo')[9].innerHTML= vidinfo 
            })
            })
         fetch('/vidinfo?id='+encodeURIComponent(data[10].id)).then((response)=>{
            response.json().then((data)=>{
            if(data.length==0){
                return document.getElementsByClassName('vidinfo')[10].innerHTML= 'Unavailable'
                }
                const vidinfo = data[0].type
                document.getElementsByClassName('vidinfo')[10].innerHTML= vidinfo 
            })
            })
        fetch('/vidinfo?id='+encodeURIComponent(data[11].id)).then((response)=>{
            response.json().then((data)=>{
            if(data.length==0){
                return document.getElementsByClassName('vidinfo')[11].innerHTML= 'Unavailable'
                }
                const vidinfo = data[0].type
                document.getElementsByClassName('vidinfo')[11].innerHTML= vidinfo 
            })
            })
    fetch('/vidinfo?id='+encodeURIComponent(data[12].id)).then((response)=>{
            response.json().then((data)=>{
            if(data.length==0){
                return document.getElementsByClassName('vidinfo')[12].innerHTML= 'Unavailable'
                }
                const vidinfo = data[0].type
                document.getElementsByClassName('vidinfo')[12].innerHTML= vidinfo 
            })
            })
    fetch('/vidinfo?id='+encodeURIComponent(data[13].id)).then((response)=>{
            response.json().then((data)=>{
            if(data.length==0){
                return document.getElementsByClassName('vidinfo')[13].innerHTML= 'Unavailable'
                }
                const vidinfo = data[0].type
                document.getElementsByClassName('vidinfo')[13].innerHTML= vidinfo 
            })
            })
    fetch('/vidinfo?id='+encodeURIComponent(data[14].id)).then((response)=>{
            response.json().then((data)=>{
            if(data.length==0){
                return document.getElementsByClassName('vidinfo')[14].innerHTML= 'Unavailable'
                }
                const vidinfo = data[0].type
                document.getElementsByClassName('vidinfo')[14].innerHTML= vidinfo 
            })
            })
    })
    })
})

