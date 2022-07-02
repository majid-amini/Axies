const search_btn = document.querySelector('.glass');
let input = document.querySelector('.search_input');
let deleteBtn = document.querySelector('.delete');
const btnMenu = document.querySelector('#menu');
const menuUl = document.querySelector('.first_ul');

search_btn.addEventListener('click',function(){
    input.classList.toggle('search_input--show');
    deleteBtn.style.display = ('block');
    if (!input.classList.contains('search_input--show')) {
        deleteBtn.style.display = ('none');
    }
})

deleteBtn.addEventListener('click',function(){
    input.classList.remove('search_input--show');
    deleteBtn.style.display = ('none');
})





let header = document.getElementById('header');
let topOff = header.offsetTop;
window.onscroll = function () {
    scrollfunc();
};

function scrollfunc() {
    if (window.pageYOffset > topOff) {
        header.classList.add('sticky_menu');
    } else {
        header.classList.remove('sticky_menu')
    }
}





//tab info
// const info = document.querySelectorAll('.info');
// info.addEventListener('click',function(event){
//     info.classList.toggle('blue_border');
// })





//scrollBtn function
const scroll_btn = document.querySelector('.scroll');

window.addEventListener('scroll',function(){
    if (window.scrollY > 150) {
        scroll_btn.classList.remove("display-none");
    } else {
        scroll_btn.classList.add("display-none");
    }
})




const lightBtn = document.querySelector(".light");
lightBtn.addEventListener('click',function(){
    document.body.classList.toggle("light_mode");
})


btnMenu.addEventListener('click', () => {
    menuUl.classList.toggle("display");    
})
