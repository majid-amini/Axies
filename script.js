const search_btn = document.querySelector('.glass');
let input = document.querySelector('.search_input');
let deleteBtn = document.querySelector('.delete');

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


// const light_btn = document.querySelector('.light');
// light_btn.addEventListener('click',function(){
//  document.body.classList.remove('dark_mode');
//  document.body.classList.add('light_mode');
 
   
// })

// const dark_btn = document.querySelector('.dark');
// dark_btn.addEventListener('click',function(){
//     document.body.classList.remove('light_mode');
//     document.body.classList.add('dark_mode'); 
// })


let header = document.getElementById('header');
let topOff = header.offsetTop;
window.onscroll = function () {
    scrollfunc();
};

function scrollfunc() {
    if (window.pageYOffset > topOff) {
        header.classList.add('test');
    } else {
        header.classList.remove('test')
    }
}

const rightArrow = document.querySelector('.right-arrow');
const socialSticky = document.querySelector('.social_sticky--total');
rightArrow.addEventListener('click',function(){
    socialSticky.style.transform.scale = '1';
})