'use strict'
const signup = document.querySelector('#signup')
let signInText = document.querySelector('#signIn_text')
let submit = document.querySelector("#submit")
let nameEl = document.querySelector(".name_total")
console.log(nameEl);

signup.addEventListener('click', changeElement)

function changeElement () {

    if (signInText.textContent == "Sign In") {
        signInText.textContent = "Sign Up"
        signup.textContent = "Log In"
        submit.textContent = "Register"
        nameEl.classList.add("display")
        console.log(nameEl.classList);

        
    } else {
        signInText.textContent = "Sign In"
        signup.textContent = "create an account"
        submit.textContent = "Sign in"
        nameEl.classList.remove("display")
    }
    
}



