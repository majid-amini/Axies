//timer function
let countDown = document.querySelector('#countdown');
let countDownDate = new Date('june 13,2022 01:51:20').getTime();
let interval = setInterval(function (){

    let now = new Date().getTime();
    
    let distance = countDownDate - now;
    

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor ((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor ((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor ((distance % (1000 * 60)) / 1000);
    
    countDown.innerHTML = `${days}d : ${hours}h: ${minutes}m: ${seconds}s`;
},1000)