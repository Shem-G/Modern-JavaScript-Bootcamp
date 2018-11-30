// undefined for variable
let name

name = 'jen'

if(name === undefined){
    console.log('Please provide a name')
} else {
    console.log(name)
}

// Undefined for function
// Undefined as function return default value
let square = function(num){
    console.log(num)
}

let result = square()

console.log(result)

//Null is a dev assigned value, Undefined is program-defined 
let age = 27

age = null

console.log(age)