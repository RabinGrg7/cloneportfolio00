
// word letter change through changing each letter 


let letters = document.querySelectorAll(".word"); //catch the class name tag
letters.forEach(function (a) {                   //catch each text using forEach
    let words = a.textContent.split(""); 
    a.textContent = "";
    words.forEach(function (b) {
        let span = document.createElement("span");
        span.textContent = b;
        span.className = "newClass";
        a.append(span);
    });
    
});

let currentletterIndex = 0;
let maxletterLength = letters.length - 1;

letters[currentletterIndex].style.outopacity = "1";


let changeText = ()=>{
    let currentText = letters[currentletterIndex];
    let nextWord = currentletterIndex === maxletterLength ? letters[0] : letters[currentletterIndex + 1];
    // console.log(currentText);
    Array.from(currentText.children).forEach((a,b)=>{
        setTimeout(()=>{
            a.className = "letter out"
        },b * 80)
    });
    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach((a,b)=>{
        a.className = "letter behind";
        setTimeout(()=>{
            a.className = "letter in"
        },340 + b* 80)

    })
    currentletterIndex = currentletterIndex === maxletterLength ? 0 : currentletterIndex +1;

} 
changeText();
setInterval(changeText,3000);

// rotate dot in skills section /////////////////////////////////

const circles = document.querySelectorAll('.circle');
circles.forEach(elem=>{
    let dots = elem.getAttribute("dot-dots");
    let percent = elem.getAttribute("dot-per");
    let actualNum = Math.floor(dots*percent/100);
    let points = "";
    let rotate = 360/dots;
    
    for(let a = 0 ; a < dots; a++){
        points += `<div class="points" style="--i:${a}; --dot:${rotate}deg "></div>`
        // console.log(a);
    }
    elem.innerHTML = points;

    const pointsMark = elem.querySelectorAll(".points");
    // console.log(pointsMark)
    for(let i = 0 ; i < actualNum; i++){
        pointsMark[i].classList.add("marked");
    }
})
// mixitup container project 
var mixer = mixitup('.portfolio-Gallery');


// active menu change color through scroll //////////////////////////////

let menu = document.querySelectorAll("header ul li a");
let section = document.querySelectorAll("section");

function activeMenu(){
    let length = section.length;

    while(--length && window.scrollY + 97 < section[length].offsetTop){}
    menu.forEach(function(elem){
        elem.classList.remove('active');
    })
    menu[length].classList.add("active")
}
activeMenu();
window.addEventListener("scroll",activeMenu);

// sticky navbar
const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY > 50)
})

// nav menu toggle /////////////////////////////

let menuIcon = document.querySelector("#menu-icon");
let nav = document.querySelector(".navlist");

menuIcon.onclick = function(){
menuIcon.classList.toggle("bx-x");
nav.classList.toggle("open");
}
window.onscroll = function(){
    menuIcon.classList.remove("bx-x");
    nav.classList.remove("open");
    }


// nav menu toggle /////////////////////////////
const observer = new IntersectionObserver((elem)=>{
    elem.forEach((a)=>{
        if(a.isIntersecting){
            a.target.classList.add("show-items");
        }else{
            a.target.classList.remove("show-items")
        }
    });
});
const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((b)=>observer.observe(b));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((b)=>observer.observe(b));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((b)=>observer.observe(b));