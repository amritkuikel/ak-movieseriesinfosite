const click = document.querySelector('#click')
const query = document.querySelector('#query')

click.addEventListener('submit',(e)=>{
    e.preventDefault()
    const searchTerm = query.value
    fetch('/searchMovie?searchTerm='+encodeURIComponent(searchTerm)).then((response)=>{
    response.json().then((data)=>{
        console.log(data)
    })
    })
})
fetch('/popularMovie').then((response)=>{
    response.json().then((data)=>{
        const popularMovie = data
        const randomno = Math.floor(Math.random()*20)
        const image =  data[randomno].backdrop_path
        const imgurl = 'https://image.tmdb.org/t/p/original'+encodeURIComponent(image)
        document.querySelector('header').style.backgroundImage=`url('${imgurl}')`
    })
})
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
fetch('/latestToday').then((response)=>{
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
                if(data[i].title==null){
                    const nametv= data[i].name
                    document.getElementsByClassName('nametvL')[i].innerHTML=nametv
                }
                else{
                    const nametv= data[i].title
                    document.getElementsByClassName('nametvL')[i].innerHTML=nametv
                }
               
            }
            for(var i=0;i<20;i++){
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

fetch('/popularTv2').then((response)=>{
    response.json().then((data)=>{
        const containerimgurl = 'https://image.tmdb.org/t/p/original'+encodeURIComponent(data[0].backdrop_path)
        console.log(containerimgurl)
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
        response.json().then((data3)=>{
            if(data3.length==0){
                return document.getElementsByClassName('vidinfo')[0].innerHTML= 'Unavailable'
                }
                const vidinfo = data3[0].type
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
        response.json().then((data3)=>{
            if(data3.length==0){
                return document.getElementsByClassName('vidinfo')[2].innerHTML= 'Unavailable'
                }
                const vidinfo = data3[0].type
                document.getElementsByClassName('vidinfo')[2].innerHTML= vidinfo 
            })
            })
        fetch('/vidinfo?id='+encodeURIComponent(data[3].id)).then((response)=>{
        response.json().then((data3)=>{
            if(data3.length==0){
                return document.getElementsByClassName('vidinfo')[3].innerHTML= 'Unavailable'
                }
                const vidinfo = data3[0].type
                document.getElementsByClassName('vidinfo')[3].innerHTML= vidinfo 
            })
            })
    fetch('/vidinfo?id='+encodeURIComponent(data[4].id)).then((response)=>{
        response.json().then((data3)=>{
            if(data3.length==0){
                return document.getElementsByClassName('vidinfo')[4].innerHTML= 'Unavailable'
                }
                const vidinfo = data3[0].type
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
        response.json().then((data3)=>{
            if(data3.length==0){
                return document.getElementsByClassName('vidinfo')[8].innerHTML= 'Unavailable'
                }
                const vidinfo = data3[0].type
                document.getElementsByClassName('vidinfo')[8].innerHTML= vidinfo 
            })
            })
         fetch('/vidinfo?id='+encodeURIComponent(data[9].id)).then((response)=>{
        response.json().then((data3)=>{
            if(data3.length==0){
                return document.getElementsByClassName('vidinfo')[9].innerHTML= 'Unavailable'
                }
                const vidinfo = data3[0].type
                document.getElementsByClassName('vidinfo')[9].innerHTML= vidinfo 
            })
            })
         fetch('/vidinfo?id='+encodeURIComponent(data[10].id)).then((response)=>{
        response.json().then((data3)=>{
            if(data3.length==0){
                return document.getElementsByClassName('vidinfo')[10].innerHTML= 'Unavailable'
                }
                const vidinfo = data3[0].type
                document.getElementsByClassName('vidinfo')[10].innerHTML= vidinfo 
            })
            })
        fetch('/vidinfo?id='+encodeURIComponent(data[11].id)).then((response)=>{
        response.json().then((data3)=>{
            if(data3.length==0){
                return document.getElementsByClassName('vidinfo')[11].innerHTML= 'Unavailable'
                }
                const vidinfo = data3[0].type
                document.getElementsByClassName('vidinfo')[11].innerHTML= vidinfo 
            })
            })
    fetch('/vidinfo?id='+encodeURIComponent(data[12].id)).then((response)=>{
        response.json().then((data3)=>{
            if(data3.length==0){
                return document.getElementsByClassName('vidinfo')[12].innerHTML= 'Unavailable'
                }
                const vidinfo = data3[0].type
                document.getElementsByClassName('vidinfo')[12].innerHTML= vidinfo 
            })
            })
    fetch('/vidinfo?id='+encodeURIComponent(data[13].id)).then((response)=>{
        response.json().then((data3)=>{
            if(data3.length==0){
                return document.getElementsByClassName('vidinfo')[13].innerHTML= 'Unavailable'
                }
                const vidinfo = data3[0].type
                document.getElementsByClassName('vidinfo')[13].innerHTML= vidinfo 
            })
            })
    fetch('/vidinfo?id='+encodeURIComponent(data[14].id)).then((response)=>{
        response.json().then((data3)=>{
            if(data3.length==0){
                return document.getElementsByClassName('vidinfo')[14].innerHTML= 'Unavailable'
                }
                const vidinfo = data3[0].type
                document.getElementsByClassName('vidinfo')[14].innerHTML= vidinfo 
            })
            })
    })
    })
})
