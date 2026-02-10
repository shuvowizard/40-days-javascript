console.log('Day 18: DOM Manipulations');

// What will we learn today?

// - Creating Elements
// - Inserting Elements
// - Modifying Content
// - Removing/replacing Elements
// - Read, Write, and Remove Attributes
// - Traversing/Navigating DOM
// - Manipulating Styles
// - Manipulating Classes
// - Controlling Visibilities
// - Build Project(s)
// - Tasks

// Creating Elements
{
    const pElem = document.createElement('p');
    pElem.innerText = 'This is a text added dynamically.';
    document.body.appendChild(pElem); // Append to body
    //console.log(pElem);
}

// Insert Elements - before/after an element
{
    const span = document.createElement('span');
    span.innerText = 'I am a Span';
    const pElem = document.querySelector('p');
    //console.log(pElem.nextElementSibling);
    document.body.insertBefore(span, pElem.nextElementSibling);
}

// Modifying Content

{
    const pElem = document.querySelector('p');
    pElem.innerHTML = '<u>Hello How</u> are You doing?';

    const divElem = document.querySelector('div');

    console.log('Inner Text', divElem.innerText);
    console.log('Text Content', divElem.textContent);
}

// Removing/replacing Elements

{

    let list = document.getElementById("myList");
    const itemToRemove = list.children[0];
    //list.removeChild(itemToRemove);
    //console.log(list.children)

    list.innerText = "";  // Empty the list
    list.replaceChildren();  // Empty the list

    const pElem = document.querySelector("p");
    list.replaceChildren(pElem)

    document.getElementById("removeMe").remove()

}

// Read, Write, and Remove Attributes of an Element

{
    const imageElem = document.querySelector("img")

    console.log(imageElem.getAttribute('alt'))  // some image

    imageElem.setAttribute("src", "banner.png");
    imageElem.setAttribute("alt", "banner");

    imageElem.removeAttribute("height");

    imageElem.hasAttribute("src") // true
    imageElem.hasAttribute("height") // false
}

// Traversing/Navigating DOM

{
    // parentElement and parentNode - both are same
    const span = document.getElementById('text');

    console.log('Parent Element', span.parentElement.parentElement);
    console.log('Parent Node', span.parentNode.parentNode);

    // children and childNodes - both are not same
    const mainElem = document.getElementById('main-id');

    console.log('Children', mainElem.children); // return HTML Collection
    console.log('Child Node', mainElem.childNodes); // return Node List

    console.log('First Child', mainElem.firstChild); // return Node
    console.log('First Child Element', mainElem.firstElementChild); // return Element

    /**
     * Node: Everything in the DOM tree. Including /n, text, elements, comments etc
     * Element : Element is only those which mapped to the HTML elements.
     */

    const headingElm = document.getElementsByID('something-id2');

    // nextSibling & extElementSibling
    console.log('Next Sibling', headingElm.nextSibling);
    console.log('Next Element Sibling', headingElm.nextElementSibling);

    // previousSibling & previousElementSibling
    console.log('Previous Sibling', headingElm.previousSibling);
    console.log('Previous Element Sibling', headingElm.previousElementSibling);
}

// Manipulating Styles
{
    const pElem = document.getElementById("p-id");
    console.log(pElem.style)
    pElem.style.backgroundColor = "pink";

}

// Manipulating Classes

{

    const mainDivElem = document.getElementById("main-id");

    // console.log(mainDivElem.className) // get className
    // mainDivElem.className = "secondary-class";  // set new className to override the old one
    // console.log(mainDivElem.className);

    console.log(mainDivElem.classList); // get classList

    mainDivElem.classList.add("test");

    mainDivElem.classList.remove("layout");

    mainDivElem.classList.replace("main-class", "secondary-class");

    console.log("Does it have test?", mainDivElem.classList.contains("test"));

    console.log("Does it have main-class?", mainDivElem.classList.contains("main-class"));

    // toggle() - If class is present, remove it, else add it
    mainDivElem.classList.toggle("test");
    mainDivElem.classList.toggle("test");
}

// Controlling Visibilities

{
    const mainDivElem = document.getElementById("main-id");
    //mainDivElem.style.display = "block";
    //mainDivElem.style.display = "none";

    //mainDivElem.style.visibility = "hidden"

    mainDivElem.style.opacity = "0.5";
}