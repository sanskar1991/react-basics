// Premitive type

const number = 1;
const num = number; // it simply copies the 'number' value into 'num'

console.log(num); // 1

// Refrence Type

const person = {
    name: 'Max'
};

const newPerson = person;

person.name = 'Manu';

console.log(newPerson); // name = 'Manu'
// "person" stores in the memory and then "newPerson" points it so if any value changes
// then it will automatically make change in the "newPerson"

person.name = 'Mani';
// if we want to separate the objects then
const secondPerson = {
    ...person
};
console.log(secondPerson);