// Write your solution here
const button = document.querySelector('#clickMe');
button.addEventListener('click', () => {
    console.log('it is clicked');
})

button.addEventListener('mouseenter', () =>{
    console.log('mouse enter')
})

button.addEventListener('mouseleave', () =>{
    console.log('mouse leave')
})

const button2 = document.querySelector('#clickMeOnce');
button2.addEventListener('click', () => {
    console.log('button 2 clicked');
})

button2.removeEventListener('click', () => {
    console.log('button 2 event listener removed');
})

document.addEventListener('DOMContentLoaded', ()=>{
    console.log('dom event listner');
})