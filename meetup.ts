// Example using any library with Typescript.
// You can use old libraries and non strict type libraries using
//   this technique.
declare const $: any;

// Example of large transpiled code.
// Learn how to use classes, but avoid as much as possible.
export class Meetup {
  retunName() {
    return "Modern Web";
  }
}

// Example of small transpiled code.
// Rely on functions to 
function returnName(): string {
  return "Modern Web";
}

// Example using const with enum so the output is minimum.
const enum meetupType {
  "Modern Web",
  "AWS",
  "Azure",
  "Google cloud",
  "DevOps - Dojo"
}

// Old libraries are easy to use with Typescript
$(myDomIsReady);

const meetupTypes = [
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
const buttonsClasses = ["btn", "btn-success", "animated", "bounceOutRight"];

function makeButton(meetupName: string): void {
  const button = document.createElement("div");
  button.innerHTML = "Sign up for " + meetupName;
  // Adding all classes to the new button.
  buttonsClasses.forEach((newClass: string) => {
    button.classList.add(newClass);
  });
  const mainContainer = document.getElementById(
    "meetup-container"
  ) as HTMLElement;

  mainContainer.appendChild(button);
}
