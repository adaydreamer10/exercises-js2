// Write your code here
let images = ["img/ali1.jpg" ,"img/ali2.jpg","img/ali3.jpg","img/ali4.jpg"] ;
let img = document.querySelector(".slide img")
img.setAttribute("src",images[0])
let currentslide = 0
let autorotation = 0

let BtnautoForward =document.querySelector("#autoforward")
let BtnForward =document.querySelector("#forward")
let Btnstop =document.querySelector("#stop")
let BtnautoBackward =document.querySelector("#autobackward")
let BtnBackward =document.querySelector("#backward")


BtnForward.addEventListener("click",goforward )
BtnBackward.addEventListener("click" ,gobackward)
Btnstop.addEventListener("click" ,gostop) 
BtnautoForward.addEventListener("click" ,goautoforward)
BtnautoBackward.addEventListener("click" ,goautobackward)

function goautoforward(){
rotator = setInterval (goforward, 3000)
autorotation = 1
}

function gostop(){
if (autorotation === 1){
clearInterval(rotator) 
autorotation = 0
}
}

function goautobackward(){
    rotator = setInterval (gobackward, 3000)
    autorotation = 1
    }

function goforward(){
currentslide = currentslide + 1;
if (currentslide > 3){
    currentslide =0;
}
img.setAttribute("src",images[currentslide])
}

function gobackward(){
    currentslide = currentslide - 1;
    if (currentslide <0){
        currentslide =3;
    } 
   
    img.setAttribute("src",images[currentslide])
}