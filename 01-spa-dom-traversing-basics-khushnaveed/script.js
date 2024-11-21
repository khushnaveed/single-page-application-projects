// Write your solution here
// Write your solution here

/* Task 1 - Getting Previous Sibling
Select the first paragraph element with class inner
console.log() its previous sibling using both the previousSibling and previousElementSibling properties
 */

const firstPara = document.querySelector('.inner');
console.log("previous sibling", firstPara.previousSibling);
console.log("previous element sibling", firstPara.previousElementSibling);

/* Task 2 - Finding Closest Parent
With the element you selected in Task 1;
Find its closest parent with class outer using the closest() method */

console.log("Closet parent", firstPara.closest('.outer'));

/* Task 3 - Testing Element Against Selector
With the element you selected in Task 1;
Check if it matches the selector .inner using the matches() method */

console.log(firstPara.matches('.inner'));

/* Task 4 - Getting All Children of an Element
Select the <div> with class middle
console.log() all its child elements using the children property */

const middleClass = document.querySelector('.middle');
console.log("All child elements of middle class:", middleClass.children);

/* Task 5 - Selecting Specific Children
Select the <div> with class middle
Find the first child with class inner using the querySelector() method */

console.log("First child with inner class:", middleClass.querySelector('.inner'));
