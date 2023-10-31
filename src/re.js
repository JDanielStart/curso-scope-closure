// Var

var firstName; // undefined
firstName = "Daniel";
console.log(firstName);

var  lastName = "Lecondricas"; // Declarar / asignar
lastName = "Chinkariji"; // reasignar
console.log(lastName);

var secondName = "Lecondricas"; // Declarando / reasignando
var secondName = "Chinkariji"; // reasignando
console.log(lastName);

// Let

let fruite = "Apple"; // declara y asignar
fruite = "Kiwi" // reasignar

console.log(fruite);

/* let fruit = "Banana"; // no se puede redeclarar */

//Const

const animal = "dog"; // declara y asigna

/* animal = "cat"; // no se puede reasignar */
/* const animal = "snake" // no se puede redeclarar */

console.log(animal);

//Pero que ocurre con los objetos (un arreglo es un objeto en javascript)
const vehicles = [];
vehicles.push("🚗");
console.log(vehicles);
vehicles.pop();
console.log(vehicles);
