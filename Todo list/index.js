const toggler = document.getElementsByClassName("toggler");
console.log(toggler);

const todoCheck = document.getElementsByClassName("todo-check");
console.log(todoCheck);

const todoText = document.getElementsByClassName("todo-text");

const time = document.getElementById("time");

const active = document.getElementById("active");
const complet = document.getElementById("complete");
const all = document.getElementById("all");

const finish = document.getElementById("exit");

let todoItems = []

document.querySelector('.todo-check').onclick = function(){
    if(document.querySelector('.todo-text input').Value.length == 0){
        alert("Please, Enter a task");
    }
}