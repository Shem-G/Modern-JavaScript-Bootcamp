// Lexical scoping (static scoping)
// Global scope: Defined outside of code blocks
// Local scope: Define inside of code block

let varOne = 'varOne'

if(true){
    console.log(varOne)
    let varTwo = 'varTwo'
    console.log(varTwo)

    if(true){
        let varFour = 'varFour'
    }
}

if(true){
    let varThree = 'varThree'
}

console.log(varTwo)