// ES6 Class (psudo classical inheritance)

class Elf {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  // you don't need to put attack in constructor, you can just share one method with each instance to save memory
  attack() {
    return "attack with" + this.weapon;
  }
}
const peter = new Elf("Peter", "stones");
console.log(peter.attack());
console.lof(peter instanceof Elf); // true

// why JavaScript has prototypal inheritance
// "If I had done classses in JavaScript back in May 1995, I would have been told that it was too much like Java or that JavaScript was competing with Java ...I was under marleting orders to make it look like Java but not make it too big for its britches ... [it] needed to be a silly little brother language." --Brendan Eich
// in a interview if you get asked "Does JavaScript have class?" then you can anser like "well, yes they do as a syntactic sugar", but class keyword is still just prototypal inheritance (just an object)"
const fiona = new Elf("Fione", "ninja stars");
const ogre = { ...fiona };
console.log(fiona === ogre); // false
fiona.__proto__; // empty
ogre.attack(); // can't
