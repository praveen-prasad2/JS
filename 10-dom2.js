// let button=document.querySelector('button')
// button.innerHTML="Click me"
// console.log(button)

// let input=document.querySelector('#value')
// input.value="Hello"

// let a=document.querySelector('.link')
// a.innerHTML="click here"

// let button=document.querySelectorAll('button')
// button.innerHTML="clickme"
// console.log(button)

// let button=document.querySelector('#btn')
// button.addEventListener("click",function()   {
//     alert("Hello")
// })


let input=document.querySelector('#text')
let button=document.querySelector('.alert')
button.addEventListener("click",function(){
  alert(input.value)
}
)

let head=document.querySelector(".click")
head.addEventListener("click",function(e){
    console.log(e.target)
})