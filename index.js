console.log('hello')
const inputText=document.getElementById('input-text')
let divText = document.getElementById("text-div")
let submitBtn = document.getElementById("submit")
inputText.addEventListener('keyup', ()=>{
 gsap.fromTo('#text-div',{opacity:0}, {opacity:1})
 divText.innerText = inputText.value
 
})