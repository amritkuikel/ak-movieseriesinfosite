function drop (a){
    if(document.getElementsByClassName('dropdownContentsI')[a].style.display=='none'){
        document.getElementsByClassName('dropdownContentsI')[a].style.display='block'
        // document.getElementsByClassName('hoverI').style.textDecoration='underline 5px solid rgb(1,130,171)'
        if(a==0){
            document.getElementsByClassName('dropdownContentsI')[1].style.display='none'
            document.getElementsByClassName('dropdownContentsI')[2].style.display='none'
        }
        else if(a==1){
            document.getElementsByClassName('dropdownContentsI')[0].style.display='none'
            document.getElementsByClassName('dropdownContentsI')[2].style.display='none'
        }
        else{
            document.getElementsByClassName('dropdownContentsI')[0].style.display='none'
            document.getElementsByClassName('dropdownContentsI')[1].style.display='none'
        }
    }
    else{
         document.getElementsByClassName('dropdownContentsI')[a].style.display='none'
    }
}
document.getElementsByClassName('hoverI')[0].addEventListener('click',()=>{
    drop(0)
})
document.getElementsByClassName('hoverI')[1].addEventListener('click',()=>{
    drop(1)
})
document.getElementsByClassName('hoverI')[2].addEventListener('click',()=>{
    drop(2)
})