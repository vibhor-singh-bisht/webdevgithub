let h1Name=document.body.children[0];
console.dir(h1Name)
console.dir(h1Name.parentElement);
console.dir(h1Name.nextElementSibling);

let thepara=document.querySelector('.onlypara');
console.dir(thepara);
thepara.textContent='new change';
console.log();

//To add a new element in a webpage through javascript the 
//The following procedure is followed

//Step 1 Create a new element 
//Step 2 Get access to the parent element should hold the 
//new element 
//Step 3 Insert the new element into the parent element 

//Step 1
let newAnchorElement = document.createElement('a');
newAnchorElement.href ='https://google.com';
newAnchorElement.textContent =' this is google';

//Step 2
let firstPara=document.querySelector('.onlypara');

//Step 3 
firstPara.append(newAnchorElement);

//-------------------------------------------------
//How to remove elements in the webpage using javascript

//Step 1
let removingh1=document.querySelector('h1');
removingh1.remove();


//How to move elements using js
firstPara.parentElement.append(firstPara);

