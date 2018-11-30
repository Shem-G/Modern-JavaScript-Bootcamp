// Multiple arguments
let add = function(a, b, c){
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

// Default arguments
let getScoreText = function(name = 'Anonymous', score = 0){
    //return 'Name: ' + name + ' | Score: ' + score
    return `Name: ${name} | Score: ${score}`
}

let scoreText = getScoreText(undefined, 99)
console.log(scoreText);

// Challenge area
let getTip = function(subTotal, tipPercent = 0.2){
    // A 25% tip on $40 would be $10
    let percentage = tipPercent * 100
    let tip = subTotal * tipPercent
    return `A ${percentage}% tip on $${subTotal} would be $${tip}`
}

let finalCost = getTip(60)
console.log(finalCost)
