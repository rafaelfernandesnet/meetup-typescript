"use strict";
exports.__esModule = true;
// Example of large transpiled code.
// Learn how to use classes, but avoid as much as possible.
var Meetup = /** @class */ (function () {
    function Meetup() {
    }
    Meetup.prototype.retunName = function () {
        return "Modern Web";
    };
    return Meetup;
}());
exports.Meetup = Meetup;
// Example of small transpiled code.
// Rely on functions to 
function returnName() {
    return "Modern Web";
}
// Old libraries are easy to use with Typescript
$(myDomIsReady);
var meetupTypes = [
    "Modern Web",
    "AWS",
    "Azure",
    "Google cloud",
    "DevOps - Dojo"
];
function myDomIsReady() {
    // animate.css example
    meetupTypes.forEach(makeButton);
}
// Classes to be added for each button to be created.
var buttonsClasses = ["btn", "btn-success", "animated", "bounceOutRight"];
function makeButton(meetupName) {
    var button = document.createElement("div");
    button.innerHTML = "Sign up for " + meetupName;
    // Adding all classes to the new button.
    buttonsClasses.forEach(function (newClass) {
        button.classList.add(newClass);
    });
    var mainContainer = document.getElementById("meetup-container");
    mainContainer.appendChild(button);
}
