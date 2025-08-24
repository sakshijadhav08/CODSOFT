const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 130);
})

let menu = document.getElementById('menu-icon');
let menulist = document.querySelector('.menulist');

menu.onclick =()=>{
    menu.classList.toggle('bx-x');
    menulist.classList.toggle('open');
};

window.onscroll =()=>{
    menu.classList.remove('bx-x');
    menulist.classList.remove('open');
};

// var typed = new yped(".input", {
//     string:["Web Developer.","Web Designer.","MERN Developer."],
//     typeSpeed: 120,
//     backSpeed: 70,
//     loop: true
// })