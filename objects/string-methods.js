let name = '   Hrerjy Moo    '

//Length property
console.log(name.length)

console.log(name.toUpperCase())

console.log(name.toLowerCase())

//Includes method
let password = 'abc123noodles098'
console.log(password.includes('password'))

//Trim
console.log(name.trim())

//Challenge area

//isValidPassword
// true if length is more than 8 and does not contain the word 'password'

let isValidPassword = function(password){
    return password.length > 8 && !password.includes('password')
}

console.log(isValidPassword('1234'))
console.log(isValidPassword('abc1234!!'))
console.log(isValidPassword('123sdfsdpasswordf4'))