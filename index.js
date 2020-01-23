/*
 * This is index.js
 * Start by modifying the id, fn and sn functions to return
 * information about you, then open index.html to check what
 * else you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year shoudl use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

function id() {
    return "UP894547";
    // e.g. return "UP654321";
}

function fn() {
    return "Jools";
}

function sn() {
    return "Hattey";
}

// add your functions here

function replaceText(elementValue, stringValue) {
    elementValue.textContent = stringValue;
    
}

function addTextTo(elementValue, stringValue) {
    elementValue.textContent += stringValue;
}

function moreBears() {
    let bear = document.querySelector("#animals");
    bear.setAttribute("src", "http://placebear.com/400/200");
    bear.setAttribute("alt", "A bear.");
    bear.setAttribute("title", "A BEAR!");
}

function setId(elementValue, stringValue) {
    elementValue.setAttribute("id", stringValue);
    return elementValue;
}

function setClass(elementValue, stringValue) {
    elementValue.setAttribute("class", stringValue);
    return elementValue;
}

function addAClass(elementValue, stringValue) {
    elementValue.classList.add(stringValue);
    return elementValue;
}

function removeAClass(elementValue, stringValue) {
    elementValue.classList.remove(stringValue);
    return elementValue;
}

function newElement(name) {
    const div = document.createElement(name);
    return div
}

function findElementById(ID) {
    return document.querySelector("#"+ID);
}

function findElementsByQuery(query) {
    return document.querySelectorAll(query);
}

function reverseList(listElement) {
    let listArray = listElement
    let x = listElement.length;
    for(let i=0; i<listElement.length; i++) {
        listElement[x-1].replaceText() = listArray[i];

        x--;
    }
}

function dupe(inputSelector) {
    if(inputSelector.parentElement === undefined) {

    } else {
        inputSelector.parentElement.appendChild(inputSelector.clone());
    }
    
}