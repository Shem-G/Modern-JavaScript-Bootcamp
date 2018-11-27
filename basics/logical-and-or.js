let temp = 55

if (temp >= 60 && temp <= 90){
    console.log('It is nice outside')
} else if(temp <= 0 || temp >= 120){
    console.log('Do not go outside')
} else{
    console.log('Do what you want')
}

// Challenge area

let isGuestOneVegan = true
let isGuestTwoVegan = true

// Are both vegan
// Is one vegan
// Else, neither vegan, offer anything on the menu

if (isGuestOneVegan && isGuestTwoVegan){
    console.log('Both vegan, give vegan menu')
} else if (isGuestOneVegan || isGuestTwoVegan){
    console.log('One vegan, give mixed menu')
} else {
    console.log('Neither vegan, give full menu')
}