let move=document.querySelector(".menu-icon");
let nav=document.querySelector('.menu');
move.onclick=()=>{
    move.classList.toggle('move');
    nav.classList.toggle('active');
    bell.classList.remove('active');
}

let bell=document.querySelector('.notification');
let bellbtn=document.querySelector('#bell-icon');
bellbtn.onclick=()=>{
    bell.classList.toggle('active');
}


window.onscroll=()=>{
    bell.classList.remove('active');
    move.classList.remove('move');
    nav.classList.remove('active');
}


window.onscroll=function(){mufunction()};
function mufunction(){
    var winScroll=document.body.scrollTop || document.documentElement.scrollTop;
    var height=document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled=(winScroll/height)*100;
    document.getElementById('')
}