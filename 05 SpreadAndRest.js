// Spread

// Spread with an array
const num = [1,2,3,4]
const nums = [...num,5,6]


console.log(nums) // [1,2,3,4,5,6]

// Spread with object
const person= {
  name: 'Hello'
};

const newPerson = {
  ...person,
  age : 28
}

console.log(newPerson); // name = 'Herold', age = 28

// Rest

const func = (...args) => {
	return args.filter(el => el === 1); 
	// Since it converts the argument in an array so we can use 'filter()' which checks every element
  // '===' is the operator for checking
  // if el(element) == 1
}

console.log(func(1,2,3)); // [1]