let isAccountLocked = false
let userRole = 'user'

if(isAccountLocked){
  console.log('Account is locked')
} else if (userRole === 'admin') {
  console.log('Welcome Admin!')
} else {
  console.log('Welcome!')
}

// Challenge area

let temp = 45;

if(temp <= 32){
  console.log('It is freezing outside')
} else if(temp >= 110){
  console.log('It is too hot outside')
} else {
  console.log('It is perfect outside')
}
