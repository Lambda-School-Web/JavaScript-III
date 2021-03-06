/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

/*
 * Inheritance chain: GameObject -> CharacterStats -> Humanoid
 * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
 * Instances of CharacterStats should have all of the same properties as GameObject.
 */

// Test you work by un-commenting these 3 objects and the list of console logs below:

const GameObject = function(attributes) {
  this.createdAt = attributes.createdAt;
  this.name = attributes.name;
  this.dimensions = attributes.dimensions;
};

GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game.`;
};

const CharacterStats = function(attributes) {
  GameObject.call(this, attributes);
  this.healthPoints = attributes.healthPoints;
};
CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage.`;
};

const Humanoid = function(attributes) {
  CharacterStats.call(this, attributes);

  this.team = attributes.team;
  this.weapons = attributes.weapons;
  this.language = attributes.language;
};
Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}.`;
};

Humanoid.prototype.dmgCalc = function() {
  min = Math.ceil(this.atkPwr - 5);
  max = Math.floor(this.atkPwr + 5);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1
  },
  healthPoints: 5,
  name: "Bruce",
  team: "Mage Guild",
  weapons: ["Staff of Shamalama"],
  language: "Common Tongue"
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  healthPoints: 15,
  name: "Sir Mustachio",
  team: "The Round Table",
  weapons: ["Giant Sword", "Shield"],
  language: "Common Tongue"
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 10,
  name: "Lilith",
  team: "Forest Kingdom",
  weapons: ["Bow", "Dagger"],
  language: "Elvish"
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

// Stretch task:
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
const Hero = function(attributes) {
  Humanoid.call(this, attributes);
  this.atkPwr = attributes.atkPwr;
};
Hero.prototype = Object.create(Humanoid.prototype);

const Villain = function(attributes) {
  Humanoid.call(this, attributes);
  this.atkPwr = attributes.atkPwr;
};
Villain.prototype = Object.create(Humanoid.prototype);

// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
Hero.prototype.mortalStrike = function(damageDealt, target) {
  if (this.healthPoints <= 0) {
    return `You can't attack while dead. Next time don't let your health points reach 0.`;
  }

  if (target.healthPoints <= 0) {
    return `You have already slained ${
      target.name
    }. You can stop attacking now.`;
  }

  target.healthPoints = target.healthPoints - damageDealt;
  if (target.healthPoints > 0) {
    return `You have dealt ${damageDealt} damage points to ${
      target.name
    }, remaining health points: ${target.healthPoints}`;
  } else {
    return `You have obliterated ${target.name}, bringing great honor to the ${
      this.team
    }`;
  }
};

Villain.prototype.pyroBlast = function(damageDealt, target) {
  if (this.healthPoints <= 0) {
    return `You can't attack while dead. Next time don't let your health points reach 0.`;
  }

  if (target.healthPoints <= 0) {
    return `You have already slained ${
      target.name
    }. You can stop attacking now.`;
  }
  target.healthPoints = target.healthPoints - damageDealt;
  if (target.healthPoints > 0) {
    return `You have dealt ${damageDealt} damage points to ${
      target.name
    }, remaining health points: ${target.healthPoints}`;
  } else {
    return `You have incinerated ${target.name}, bringing great honor to the ${
      this.team
    }`;
  }
};
// * Create two new objects, one a villain and one a hero and fight it out with methods!
const saurfang = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  healthPoints: 65,
  name: "Varok Saurfang",
  team: "Blackrock Clan",
  weapons: ["Arcanite Reaper"],
  language: "Hordish",
  atkPwr: 10
});

const kaelthas = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 55,
  name: "Kael'thas Sunstrider",
  team: "Sunfury",
  weapons: ["Felo'melorn"],
  language: "Elvish",
  atkPwr: 15
});

console.log(saurfang.mortalStrike(saurfang.dmgCalc(), kaelthas));
console.log(kaelthas.pyroBlast(kaelthas.dmgCalc(), saurfang));
console.log(saurfang.mortalStrike(saurfang.dmgCalc(), kaelthas));
console.log(kaelthas.pyroBlast(kaelthas.dmgCalc(), saurfang));
console.log(saurfang.mortalStrike(saurfang.dmgCalc(), kaelthas));
console.log(kaelthas.pyroBlast(kaelthas.dmgCalc(), saurfang));
console.log(saurfang.mortalStrike(saurfang.dmgCalc(), kaelthas));
console.log(kaelthas.pyroBlast(kaelthas.dmgCalc(), saurfang));
console.log(saurfang.mortalStrike(saurfang.dmgCalc(), kaelthas));
console.log(kaelthas.pyroBlast(kaelthas.dmgCalc(), saurfang));
console.log(saurfang.mortalStrike(saurfang.dmgCalc(), kaelthas));
