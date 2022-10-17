let welcomeEl = document.getElementById("welcome-el")
 
let greeting = "Welcome Back "
let name = "oyindamola"

welcomeEl.innerText = greeting + name

welcomeEl.innerText += document.querySelector("#welcome-el").innerHTML = String.fromCodePoint(0x1F525) + "❤️";

// altschool project

let detailsVisit = document.getElementsByClassName("details-visit")
console.log(detailsVisit)

let userName = prompt("Enter Your Username")

function validateUsername (userName){
    if(userName.length > 12){
     return false   
    }else{
        return true
    }      
}

let passWord = prompt("Enter password")

function validatePassword(passWord){
    if(passWord.lengtth > 6){
        return true 
    }else{
        return false
    }
}

let confirmPassword = prompt("Confirm PassWord")

function validateConfirmPassword(confirmPassword){
    if(passWord === confirmPassword){
        return true
    }else{
        return 'incorrect password'
    }
}

// let userDetails = {
//     "Oyindamola": {
//         lastName:"kushimo",
//         firstName:"Oyindamola",
//         email:"kushimo.oyindamola@yahoo.com",
//         password:"oyin1234"
//     },
//     "damola": {
//         lastName:"Ademi",
//         firstName:"Ayomide",
//         email:"ademiayomide@yahoo.com",
//         password:"7890sea"
//     },
// }
    