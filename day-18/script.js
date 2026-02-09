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
