document.querySelector('.search').addEventListener('click',()=>{
    if(document.querySelector('.dropdown-search').style.display == "none"){
       document.querySelector('.dropdown-search').style.display = "block"
       document.querySelector('.search').style.backgroundImage= "url('../../assests/cancel.png')"
    }
    else{
       document.querySelector('.dropdown-search').style.display = "none"
       document.querySelector('.search').style.backgroundImage= "url('../../assests/search.png')"
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
const imgsearch1 = document.getElementsByClassName('imgsearch1')
imgsearch1[0].addEventListener('click',()=>{
   document.querySelector('.dropdown-search').style.display = "none"
   document.querySelector('.search').style.backgroundImage= "url('../../assests/search.png')"
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
})
const query = document.getElementById('query')
query.addEventListener('input',()=>{
   const searchTerm = query.value
    fetch('/searchMovie?searchTerm='+encodeURIComponent(searchTerm)).then((response)=>{
    response.json().then((data)=>{
        const txtsearch1=document.getElementsByClassName('txtsearch1')
        const trendingresult=document.getElementsByClassName('trendingresult')
        txtsearch1[0].innerHTML='RESULTS OF YOUR QUERY :-'
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
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-65px";
  }
  prevScrollpos = currentScrollPos;
}

