const numbers = [1,2,3];

const newArray = numbers.map((num) => {  
	// 'map' is a func which executed on each element and then map the output to a new array
	// for i in numbers // So, 'i == num' here
	return num * 2;
});

console.log(newArray);

// map(), find(), findIndex(), filter(), reduce(), concat(), slice(), splice()