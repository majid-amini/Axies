'use strict'
const signup = document.querySelector('#signup')
let signInText = document.querySelector('#signIn_text')

signup.addEventListener('click', changeElement)

function changeElement () {

    if (signInText.textContent == "Sign In") {
        signInText.textContent = "Sign Up"
     signup.textContent = "Log In"
    } else {
        signInText.textContent = "Sign In"
        signup.textContent = "create an account"
    }
    
}



