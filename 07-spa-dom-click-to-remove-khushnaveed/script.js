/* const buttons = document.querySelectorAll(".remove-button");



buttons.forEach(button =>{
    button.addEventListener("click", () => {
        const parentDiv = button.parentElement;
        parentDiv.remove();
    });
}); */

//using event delegation

const container = document.querySelector('#container');

container.addEventListener('click', ()=>{
    if(event.target && event.target.classList.contains('remove-button')){
        const parentDiv = event.target.parentElement;
        parentDiv.remove();
    }
});