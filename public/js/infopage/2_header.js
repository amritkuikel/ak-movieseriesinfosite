fetch(`/tv?id=${id}`).then((response)=>{
    response.json().then((data)=>{
        if(data.success==false){
            fetch(`/movie?id=${id}`).then((response)=>{
                response.json().then((data)=>{
                    const url = 'https://image.tmdb.org/t/p/original'+encodeURIComponent(data.backdrop_path)
                    document.getElementsByClassName('header_imageI')[0].style.backgroundImage=`url('${url}')`
                    const urlposter = 'https://image.tmdb.org/t/p/original'+encodeURIComponent(data.poster_path)
                    document.getElementsByClassName('posterI')[0].style.backgroundImage=`url('${urlposter}')`
                    document.getElementsByClassName('namedate')[0].innerHTML = data.title +  `&nbsp(${data.release_date.substring(0,4)})`
                    if(data.adult==false){
                        document.getElementsByClassName('rate')[0].innerHTML = 'TV-14'
                    }
                    else{
                        document.getElementsByClassName('rate')[0].innerHTML = 'TV-MA'
                    }
                    const genres = data.genres[0].name +', '+ data.genres[1].name
                    document.getElementsByClassName('genre')[0].innerHTML = genres
                    document.getElementsByClassName('score')[0].innerHTML = `${Math.trunc(data.vote_average*10)}% `
                    document.getElementsByClassName('overviewtxt')[0].innerHTML = data.overview
                    fetch(`/creditmovie?id=${id}`).then((response)=>{
                        response.json().then((data)=>{
                            document.getElementsByClassName('creatorname')[0].innerHTML = data.crew[0].name
                            document.getElementsByClassName('creatorname')[1].innerHTML = data.crew[1].name
                            document.getElementsByClassName('txtcreator')[0].innerHTML = data.crew[0].job
                            document.getElementsByClassName('txtcreator')[1].innerHTML = data.crew[1].job
                        })
                    })
                })
            })
        }
        else{
            const url = 'https://image.tmdb.org/t/p/original'+encodeURIComponent(data.backdrop_path)
            document.getElementsByClassName('header_imageI')[0].style.backgroundImage=`url('${url}')`
            const urlposter = 'https://image.tmdb.org/t/p/original'+encodeURIComponent(data.poster_path)
            document.getElementsByClassName('posterI')[0].style.backgroundImage=`url('${urlposter}')`
            document.getElementsByClassName('namedate')[0].innerHTML = data.name +  `&nbsp(${data.first_air_date.substring(0,4)})`
            if(data.adult==false){
                document.getElementsByClassName('rate')[0].innerHTML = 'TV-14'
            }
            else{
                document.getElementsByClassName('rate')[0].innerHTML = 'TV-MA'
            }
            const genres = data.genres[0].name +', '+ data.genres[1].name
            document.getElementsByClassName('genre')[0].innerHTML = genres
            document.getElementsByClassName('score')[0].innerHTML = `${Math.trunc(data.vote_average*10)}% `
            document.getElementsByClassName('overviewtxt')[0].innerHTML = data.overview
            document.getElementsByClassName('creatorname')[0].innerHTML = data.created_by[0].name
            document.getElementsByClassName('creatorname')[1].innerHTML = data.created_by[1].name
        }
    }) 
})