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


//timer function
let countDown = document.querySelector('#countdown');
let countDownDate = new Date('april 13,2022 01:51:20').getTime();
let interval = setInterval(function (){

    let now = new Date().getTime();
    
    let distance = countDownDate - now;
    

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor ((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor ((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor ((distance % (1000 * 60)) / 1000);
    
    countDown.innerHTML = `${days}d : ${hours}h: ${minutes}m: ${seconds}s`;
},1000)


//tab info
// const info = document.querySelectorAll('.info');
// info.addEventListener('click',function(event){
//     info.classList.toggle('blue_border');
// })


