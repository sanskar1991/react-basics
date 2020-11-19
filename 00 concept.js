const { Component } = require("react")

*JSX: https://babeljs.io/

*Class
*Function
*Inheritance

*{ }: for dynamic entry

*Spread: Used to split up array elements (OR) object properties.

const newArray = [...oldArray, 1, 2, 3] # copyng the content from oldArray to newArray with some new elements
const newObj = {...oldObj, newProp:5} # similarly with objects

*Rest: Used to merge a list of function arguments into an array

function sortArgs(...args){   # You can add any number of arguments and 'rest' converts them into an array.
	return args.sort()
}

*Destructuring: Easily extract array elements or object properties and store them in variables.

*props: for adding properties and it should be passed as argument in a function.
{props.field_name}: for fields within the tags
{props.children}: for additional text between tags

*state: providing values or peoperties within the class 
*this: points to the current class

*setState: provides us to update the state and notify react that a perticular property has been updated
(Component allows us to use this method)

*ReactHooks: feature to manage state in funtional component (it is a collection of functions)
*useState: most important Hook in react (use with functional component to manage state property)
			it always returns an array with exactly 2 elements(original, manipulated one)
Class component: state and setState
Functional component: useState[0], useState[1]

