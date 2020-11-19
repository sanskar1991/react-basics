// Array destructuring

const numbers = [1,2,3];
[num1,num2] = numbers;
console.log(num1,num2); // 1 | 2

[num1, ,num3] = numbers;
console.log(num1,num2,num3);

// Object destrcturing

name = {name:'Max', age:28}
console.log(name.name); // Max
console.log(name.age); // undefined


lis = [1,2,3]
a = lis[0]