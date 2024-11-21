// Write your code here
// Write your code here

/* Task 1
Using JavaScript;
Select the <header> that is the closest parent of the <h1> heading
Give the <header> a grey solid border of 5px */

const heading = document.querySelector('h1');
const closestHeader = heading.closest('header');
//console.log('closest header:', closestHeader);
closestHeader.style.border = '5px solid grey';

/* Task 2
Write some JavaScript so that if the element with the class .info contains an element with the class .info-package;
    Select all elements with the class .package-title
    Give the previous sibling element a border with the following value 2px solid #072F5F */

const getInfoClassElement = document.querySelector('.info');

if(getInfoClassElement && getInfoClassElement.querySelector('.info-package')){
    const pkgTitle = document.querySelectorAll('.package-title');
    pkgTitle.forEach(title => {
        title.style.border = '2px solid #072F5F';
    })
}

/* Task 3
Write some JavaScript so that for the element with the class .info;
Select all <label> elements inside the element with the class .info
For each <label> element, check the classname;
if it matches mild, give the element a yellow solid border
if it matches intense, give the element an orange solid border
if it maches neither, give it a red solid border
*/

getInfoClassElement.querySelectorAll('label').forEach(label => {
    if(label.className === 'mild'){
        label.style.border = '2px solid yellow';
    }else if(label.className === 'intense'){
        label.style.border = '2px solid orange';
    }else{
        label.style.border = '2px solid red';
    }
})


/* Task 4
Using JavaScript;
Copy the children of ul.nav-list element to the ul.site-map element */
const navList = document.querySelector('ul.nav-list');
const siteMap = document.querySelector('ul.site-map');

console.log(navList.children);

Array.from(navList.children).forEach(child => {
    siteMap.appendChild(child.cloneNode(true)); 
});

console.log(siteMap.children);
