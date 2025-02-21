//Create an HTML element
document
  .querySelector("#Function1V button")
  .addEventListener("click", function () {
    let btn = document.createElement("button");
    btn.innerText = "This is a button";
    document.querySelector("#Function1V .demo").append(btn);
  });

//Remove an HTML element

document
  .querySelector("#Function2V button")
  .addEventListener("click", function () {
    let pElement = document.querySelector("#Function2V .demo p");
    pElement.remove();
  });

// Append an HTML element

document
  .querySelector("#Function3V button")
  .addEventListener("click", function () {
    let pElement = document.createElement("p");
    pElement.innerText = "This is a paragraph";
    document.querySelector("#Function3V .demo").append(pElement);
  });

//Prepend an HTML element

document
  .querySelector("#Function4V button")
  .addEventListener("click", function () {
    let pElement = document.createElement("p");
    let parentElement = document.querySelector("#Function4V .demo");
    pElement.innerText = "This is a paragraph";
    parentElement.insertBefore(pElement, parentElement.firstChild);
  });

//Create + add an html element after another element

document
  .querySelector("#Function5V button")
  .addEventListener("click", function () {
    let pElement = document.createElement("p");
    let parentElement = document.querySelector("#Function5V .demo");
    let previousElement = document.querySelector("#Function5V .demo p");
    pElement.innerText = "Im also a paragraph";
    parentElement.insertBefore(pElement, previousElement.nextSibling);
  });

//Create + add an html element before another element

document
  .querySelector("#Function6V button")
  .addEventListener("click", function () {
    let pElement = document.createElement("p");
    let parentElement = document.querySelector("#Function6V .demo");
    let lastElement = document.querySelector("#Function6V .demo p:last-child");
    pElement.innerText = "Im also a paragraph";
    parentElement.insertBefore(pElement, lastElement);
  });

//Clone an HTML element

document
  .querySelector("#Function7V button")
  .addEventListener("click", function () {
    let pElement = document.querySelector("#Function7V .demo p");
    let clonedElement = pElement.cloneNode(true);
    pElement.parentElement.append(clonedElement);
  });

//Add a class to an HTML item

document
  .querySelector("#Function8V button")
  .addEventListener("click", function () {
    let pElement = document.querySelector("#Function8V .demo p");
    pElement.classList.add("bgPastelBlue");
  });

//Remove a class to an HTML item

document
  .querySelector("#Function9V button")
  .addEventListener("click", function () {
    let pElement = document.querySelector("#Function9V .demo p");
    pElement.classList.remove("bgPastelBlue");
  });

//Toggle a class to an HTML item

document
  .querySelector("#Function10V button")
  .addEventListener("click", function () {
    let pElement = document.querySelector("#Function10V .demo p");
    pElement.classList.toggle("bgPastelBlue");
  });

//Add a disabled attribute to an HTML button

document
  .querySelector("#Function11V button")
  .addEventListener("click", function () {
    let pElement = document.querySelector(
      "#Function11V .demo button:last-child"
    );
    pElement.disabled = true;
  });

//Remove the disabled attribute to an HTML button

document
  .querySelector("#Function12V button")
  .addEventListener("click", function () {
    let pElement = document.querySelector(
      "#Function12V .demo button:last-child"
    );
    pElement.disabled = false;
  });

//Set a data-src attribute to a img element

document
  .querySelector("#Function13V button")
  .addEventListener("click", function () {
    let pElement = document.querySelector("#Function13V .demo img");
    pElement.setAttribute("data-src", "example");
  });

//Remove the data-src attribute of the img element

document
  .querySelector("#Function14V button")
  .addEventListener("click", function () {
    let pElement = document.querySelector("#Function14V .demo img");
    pElement.removeAttribute("data-src");
  });

//Hide an HTML element on click (display: none)

document
  .querySelector("#Function15V button")
  .addEventListener("click", function () {
    let pElement = document.querySelector("#Function15V .demo button");
    pElement.style.display = "none";
  });

//Show an HTML element on click (display: block)

document
  .querySelector("#Function16V button")
  .addEventListener("click", function () {
    let pElement = document.querySelector(
      "#Function16V .demo button:last-child"
    );
    pElement.style.display = "block";
  });

//SELECTORS

//Iterate a collection of elements

document
  .querySelector("#Selector1V button")
  .addEventListener("click", function () {
    let pElements = document.querySelectorAll("#Selector1V .demo p");
    pElements.forEach((element) => {
      element.classList.add("bgPastelBlue");
    });
  });

//Get the parent element of a certain element

document
  .querySelector("#Selector2V button")
  .addEventListener("click", function () {
    let parentElement = document.querySelector(
      "#Selector2V .demo button"
    ).parentNode;
    parentElement.style.fontWeight = "bold";
  });

//Get the collection of children of a certain element

document
  .querySelector("#Selector3V button")
  .addEventListener("click", function () {
    let childElements = document.querySelector("#Selector3V .demo").children;
    for (let i = 0; i < childElements.length; i++) {
      childElements[i].style.fontWeight = "bold";
    }
  });

//Get all the elements that have a certain class

document
  .querySelector("#Selector4V button")
  .addEventListener("click", function () {
    let classElements = document.getElementsByClassName("selector4V");
    for (let i = 0; i < classElements.length; i++) {
      classElements[i].style.fontWeight = "bold";
    }
  });

//Get all the elements that have a certain class

document
  .querySelector("#Selector5V button")
  .addEventListener("click", function () {
    let pElement = document.getElementById("pSelect5V");
    pElement.style.fontWeight = "bold";
  });

//Get all the elements that have a certain class and property

document
  .querySelector("#Selector6V button")
  .addEventListener("click", function () {
    let elements = document.querySelectorAll(".selector6V");
    elements.forEach((element) => {
      if (element.style.display == "none") {
        element.style.display = "block";
        element.style.color = "blue";
      }
    });
  });

//Get the selected option of a select element

document
  .querySelector("#Selector7V button")
  .addEventListener("click", function () {
    let selectedOption = document.querySelector("#Selector7V select").value;
    document.querySelector("#Selector7V span").innerText = selectedOption;
  });

//Change the href attribute of the first element

document
  .querySelector("#Selector8V button")
  .addEventListener("click", function () {
    let links = document.querySelectorAll("#Selector8V a");
    links[0].href = "https://duckduckgo.com/";
  });

//Show the value of a first input on the page

document
  .querySelector("#Selector9V button")
  .addEventListener("click", function () {
    let input = document.querySelectorAll("#Selector9V input")[0].value;
    alert(input);
  });

//Remove all items from a specific selector

document
  .querySelector("#Selector10V button")
  .addEventListener("click", function () {
    let pElements = document.querySelectorAll("#Selector10V p");
    pElements.forEach((element) => {
      element.remove();
    });
  });

//EVENTS

//HTML document loaded

let domLoadedV = false;
document.addEventListener("DOMContentLoaded", () => {
  domLoadedV = true;
});

document
  .querySelector("#Event1V button")
  .addEventListener("click", function () {
    let spanElement = document.querySelector("#Event1V span");
    spanElement.innerText = domLoadedV;
  });

//HTML element clicked
document
  .querySelector("#Event2V button")
  .addEventListener("click", function () {
    let button = document.querySelector("#Event2V button");
    button.innerText += " Clicked";
  });

//HTML element double clicked
document
  .querySelector("#Event3V button")
  .addEventListener("dblclick", function () {
    let button = document.querySelector("#Event3V button");
    button.innerText += " Double clicked";
  });

//Key pressed on keyboard
document
  .querySelector("#Event4V button")
  .addEventListener("click", function () {
    let span = document.querySelector("#Event4V span");
    document.addEventListener("keydown", function keyboardV(event) {
      span.innerText = event.key;
    });
  });

//Mouse cursor moves
document
  .querySelector("#Event5V button")
  .addEventListener("click", function () {
    let span = document.querySelector("#Event5V span");
    document.addEventListener("mousemove", function (event) {
      span.innerText = event.pageX + ", " + event.pageY;
    });
  });

//Value changed on text input
document
  .querySelector("#Event6V button")
  .addEventListener("click", function () {
    let input = document.querySelector("#Event6V input");
    let span = document.querySelector("#Event6V span");
    input.addEventListener("input", function (event) {
      span.innerText = event.target.value;
    });
  });

//Image load
let imgloadedVanilla = false;
document.querySelector("#Event7V img").addEventListener("load", function () {
  imgloadedVanilla = true;
});
document
  .querySelector("#Event7V img")
  .setAttribute("src", "https://via.placeholder.com/150");

document
  .querySelector("#Event7V button")
  .addEventListener("click", function () {
    document.querySelector("#Event7V span").innerText = imgloadedVanilla;
  });

//Image load
let imgloadedFailVanilla = false;
document.querySelector("#Event8V img").addEventListener("error", function () {
  imgloadedFailVanilla = true;
});
document.querySelector("#Event8V img").setAttribute("src", "fail.jpg");

document
  .querySelector("#Event8V button")
  .addEventListener("click", function () {
    document.querySelector("#Event8V span").innerText = imgloadedFailVanilla;
  });

//Form submited
document
  .querySelector("#vanillaForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    document.querySelector("#Event9V span").innerText = "Form Submited!";
  });

//Option select on select element
document
  .querySelector("#Event10V select")
  .addEventListener("change", function (event) {
    document.querySelector("#Event10V span").innerText =
      "Value is: " + event.target.value;
  });

//When you position the mouse over an element
document
  .querySelector("#Event11V span")
  .addEventListener("mouseover", function (event) {
    event.target.innerText = "Mouse is over";
  });
document
  .querySelector("#Event11V span")
  .addEventListener("mouseleave", function (event) {
    event.target.innerText = "Mouse is not over";
  });

//Checkbox checked or unchecked
document
  .querySelector("#Event12V input")
  .addEventListener("change", function (event) {
    if (event.target.checked) {
      document.querySelector("#Event12V span").innerText = "Checked";
    } else {
      document.querySelector("#Event12V span").innerText = "Unchecked";
    }
  });

//Show the clicked item of an UL list
document
  .querySelector("#Event13V ol")
  .addEventListener("click", function (event) {
    document.querySelector("#Event13V span").innerText =
      "Value clicked: " + event.target.innerText;
  });
