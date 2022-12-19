fetch(`/vidTv?id=${id}`).then((response)=>{
    response.json().then((data)=>{
        if(data.success==false){
            fetch(`/vidMovie?id=${id}`).then((response)=>{
                response.json().then((data)=>{
                    for(i=0;i<10;i++){
                        const key = data.results[i].key
                        const link = 'https://img.youtube.com/vi/'+encodeURIComponent(key)+'/hqdefault.jpg'
                        document.getElementsByClassName('individualmedia')[i].style.backgroundImage=`url('${link}')`
                    } 
                })
            })
        }
        else{
            for(i=0;i<10;i++){
                const key = data.results[i].key
                const link = 'https://img.youtube.com/vi/'+encodeURIComponent(key)+'/hqdefault.jpg'
                document.getElementsByClassName('individualmedia')[i].style.backgroundImage=`url('${link}')`
            } 
        }
       
    })
})
document.getElementsByClassName('vidtext')[0].addEventListener('click',()=>{
    document.getElementsByClassName('backtext')[0].style.textDecoration='none'
    document.getElementsByClassName('postext')[0].style.textDecoration='none'
    document.getElementsByClassName('vidtext')[0].style.textDecoration='underline 2px solid black'
    fetch(`/vidTv?id=${id}`).then((response)=>{
        response.json().then((data)=>{
            if(data.success==false){
                fetch(`/vidMovie?id=${id}`).then((response)=>{
                    response.json().then((data)=>{
                        for(i=0;i<10;i++){
                            const key = data.results[i].key
                            const link = 'https://img.youtube.com/vi/'+encodeURIComponent(key)+'/hqdefault.jpg'
                            document.getElementsByClassName('individualmedia')[i].style.backgroundImage=`url('${link}')`
                        } 
                    })
                })
            }
            else{
                for(i=0;i<10;i++){
                    const key = data.results[i].key
                    const link = 'https://img.youtube.com/vi/'+encodeURIComponent(key)+'/hqdefault.jpg'
                    document.getElementsByClassName('individualmedia')[i].style.backgroundImage=`url('${link}')`
                } 
            }
           
        })
    })
})
document.getElementsByClassName('backtext')[0].addEventListener('click',()=>{
    document.getElementsByClassName('vidtext')[0].style.textDecoration='none'
    document.getElementsByClassName('postext')[0].style.textDecoration='none'
    document.getElementsByClassName('backtext')[0].style.textDecoration='underline 2px solid black'
    fetch(`/picTv?id=${id}`).then((response)=>{
        response.json().then((data)=>{
            if(data.success==false){
                fetch(`/picMovie?id=${id}`).then((response)=>{
                    response.json().then((data)=>{
                        for(i=0;i<10;i++){
                            const key = 'https://image.tmdb.org/t/p/original'+encodeURIComponent(data.backdrops[i].file_path)
                            document.getElementsByClassName('individualmedia')[i].style.backgroundImage=`url('${key}')`
                        } 
                    })
                })
            }
            else{
                for(i=0;i<10;i++){
                    const key = 'https://image.tmdb.org/t/p/original'+encodeURIComponent(data.backdrops[i].file_path)
                    document.getElementsByClassName('individualmedia')[i].style.backgroundImage=`url('${key}')`
                } 
            }
           
        })
    })
})
document.getElementsByClassName('postext')[0].addEventListener('click',()=>{
    document.getElementsByClassName('vidtext')[0].style.textDecoration='none'
    document.getElementsByClassName('backtext')[0].style.textDecoration='none'
    document.getElementsByClassName('postext')[0].style.textDecoration='underline 2px solid black'
    fetch(`/picTv?id=${id}`).then((response)=>{
        response.json().then((data)=>{
            if(data.success==false){
                fetch(`/picMovie?id=${id}`).then((response)=>{
                    response.json().then((data)=>{
                        for(i=0;i<10;i++){
                            const key = 'https://image.tmdb.org/t/p/original'+encodeURIComponent(data.posters[i].file_path)
                            document.getElementsByClassName('individualmedia')[i].style.backgroundImage=`url('${key}')`
                        } 
                    })
                })
            }
            else{
                for(i=0;i<10;i++){
                    const key = 'https://image.tmdb.org/t/p/original'+encodeURIComponent(data.posters[i].file_path)
                    document.getElementsByClassName('individualmedia')[i].style.backgroundImage=`url('${key}')`
                } 
            }
           
        })
    })
})

