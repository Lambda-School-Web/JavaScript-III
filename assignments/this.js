/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Window binding, 'this' will refer to the window object in the browser or node object on desktop, when none of the other principles are applied. Also when using 'use strict'
 * 'this' will default to undefined
 * 2. Implicit binding, is when 'this' will point to the object left of the function that is being invoked
 * 3. Explicit binding, is when we use methods such as call, apply and bind on functions to refers to a specific value.
 * 4. New binding, uses the keyword new to create a new instance of an object, 'this' will point towards the values we pass into the constructor function
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding
function showThis() {
  return this;
}

console.log(showThis());

// Principle 2

// code example for Implicit Binding
const student = {
  fName: "James",
  lName: "Bishop",
  favoriteApp: "Spotify",
  introduction: function(greeting) {
    console.log(
      `Hello my name is ${this.fName} ${this.lName} and my favorite app is ${
        this.favoriteApp
      }`
    );
  }
};

student.introduction();

// Principle 3

// code example for New Binding
function Skills(techSkill) {
  this.skill = techSkill;
}

let mySkills = new Skills("Javascript");

console.log(`I have added ${mySkills.skill} as a new skill I have learned`);

// Principle 4

// code example for Explicit Binding
const animal = {
  name: "Odin",
  species: "dog",
  sound: "woof woof"
};

function saySound() {
  console.log(this.sound);
}

saySound.call(animal);
