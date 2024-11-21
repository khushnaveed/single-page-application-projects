// Write your solution here
let parentList = [];
let currentElement = document.querySelector("cite"); 

while (currentElement) {
    parentList.unshift(currentElement.nodeName.toLowerCase());
    currentElement = currentElement.parentElement;
}

console.log(parentList.join(' > '));
