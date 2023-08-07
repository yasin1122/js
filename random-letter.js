// Return a random letter from your name.

const myName = 'Yasin'

const randomLetter = str => str[Math.floor(Math.random() * str.length)]

console.log(randomLetter(myName))

// Given solution
console.log(myName.charAt(Math.floor(Math.random() * myName.length)))
