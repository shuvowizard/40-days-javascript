console.log('Day 19 - JavaScript Events');

// What will we learn today?

// - What is an Event?
// - Event Handling and Why?
// - Event Handling in Markup
// - Event Handling in Script
// - addEventListener and removeEventListener
// - DOM Content Loaded
// - Event Object
// - Event Capturing and Bubbling
// - Event Delegation
// - Event Default Behavior
// - Custom Events
// - Project(s)
// - Tasks

/** 
 * What is an Event?
 * - An event is just a signal that something has happened in the browser, such as a mouse click, a key press, or a form submission.
 * - An event can be triggered by the user, or it can be triggered by the browser itself.
 * - An event is a message that is passed to the browser, which then sends it to the appropriate event handler.
 * - An event handler is a function that is called when an event occurs.
*/


// Event Handling in Markup
function handleClick(greeting) {
    console.log(`Button Clicked with a ${greeting}`);
}

// Event Handling in Script
const myBtn2Elem = document.getElementById('myBtn2');
myBtn2Elem.onclick = function () {
    console.log('My Button 2 Clicked');
};

// Can not add multiple - it will overwrite the previous handler
myBtn2Elem.onclick = function () {
    console.log('My Button 2 Clicked Again');
};

// Separating function
myBtn2Elem.onclick = handleClick;
myBtn2Elem.onclick = () => handleClick('Hola');

// addEventListener and removeEventListener
let counter = 0;
const countBtnElem = document.getElementById('countBtn');
const handleCount = function () {
    console.log(counter);
    counter++;
};

const greetMe = function () {
    console.log('Thank You!');
};

countBtnElem.addEventListener("click", function() {
    console.log(counter);
    counter++;
})

countBtnElem.removeEventListener("click", function() {
    console.log(counter);
    counter++;
})

// Best Practice for multiple event handlers
countBtnElem.addEventListener('click', handleCount);
countBtnElem.addEventListener('click', greetMe);
countBtnElem.removeEventListener('click', handleCount);

// DOM Content Loaded

// will never run
document.onDOMContentLoaded = function () {
    console.log('DOM Content Loaded...');
};

// this will run
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM Content Loaded...');
});

// Event Object
const searchElem = document.getElementById('search-id');
function handleChange(event) {
    console.log(event);
    console.log('Target:', event.target);
    console.log('Target Name:', event.target.name);
    console.log('Target Value:', event.target.value);
    console.log('Event Type:', event.type);
    console.log('Current Target:', event.currentTarget);
    console.log('this:', this);
}
searchElem.addEventListener('change', handleChange);
