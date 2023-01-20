console.log('JavaScript is running');

// Comment
/* Longer Comment */

/* 

const is a type of variable - a bit of memory that can hold a value
// JS uses (can use) ANY valid CSS selector to make a connection to ANY element on the page - it works the same as CSS selectors do, because it's using CSS to find mtching elements


the document is the DOM - the web page and all of its elements

quarySelector is the method (fuction) that makes the connection bertween JS and the DOM (elemets)

*/


// 1- Make the connection
// const jpgGraphic = document.querySelector ("#bitmap");

const vectorGraphic = document.querySelector ("#newBadge");

function logID() {
    console.log('clicked on this element:', this.id);
}

// 2 - decide how you want the user interact with the object you created in step 1

// Action after "click"
// jpgGraphic.addEventListener("click", logID);
// vectorGraphic.addEventListener("click", logID);


