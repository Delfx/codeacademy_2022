const mainElement = document.getElementById("main");
const h2Element = document.createElement("h2");
const ulElement = document.createElement("ul");
const liElement= document.createElement("li")
const paragraphElement = document.createElement("p");

const textNodeH2 = document.createTextNode("Hello World");
const textNodeLi = document.createTextNode("I am text in Li element");
const textParagElement = document.createTextNode("I am first paragraph Element")
const textParagElementSecond = document.createTextNode("I am second paragraph Element")

function paragraphElements (text){
    return paragraphElement.appendChild(text)
}

h2Element.appendChild(textNodeH2);
liElement.appendChild(textNodeLi);
ulElement.appendChild(liElement);

window.addEventListener("DOMContentLoaded", e => {
    mainElement.appendChild(h2Element)
    mainElement.appendChild(paragraphElements(textParagElement))
    mainElement.appendChild(ulElement)
    mainElement.appendChild(paragraphElements(textParagElementSecond))
})




