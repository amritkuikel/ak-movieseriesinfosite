document.querySelector('.search').addEventListener('click',()=>{
    if(document.querySelector('.dropdown-search').style.display == "none"){
       document.querySelector('.dropdown-search').style.display = "block"
       document.querySelector('.search').style.backgroundImage= "url('../../assests/cancel.png')"
    }
    else{
       document.querySelector('.dropdown-search').style.display = "none"
       document.querySelector('.search').style.backgroundImage= "url('../../assests/search.png')"
    }
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
const imgsearch1 = document.querySelector('.imgsearch1')
const query = document.querySelector('#query')
imgsearch1.addEventListener('click',(e)=>{
    e.preventDefault()
    const searchTerm = query.value
    fetch('/searchMovie?searchTerm='+encodeURIComponent(searchTerm)).then((response)=>{
    response.json().then((data)=>{
        const txtsearch1=document.getElementsByClassName('txtsearch1')
        const trendingresult=document.getElementsByClassName('trendingresult')
        txtsearch1[0].innerHTML='results of your query:'
        for(i=0;i<11;i++){
         if(data[i].name==null){
            trendingresult[i].innerHTML=data[i].title
         }
         else{
            trendingresult[i].innerHTML=data[i].name
         }
        }
    })
    })
})
 