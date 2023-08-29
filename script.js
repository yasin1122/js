// Modules
import sayHello from './modules.js'
import { greeter, greeter2 } from './modules.js'
import User from './user.js'

console.log(sayHello(), greeter(), greeter2())

const me = new User('email@email.com', 'Yasin')
console.log(me, me.greeting())

// Higher Order Functions

import { posts } from './posts.js'

posts.forEach(post => console.log(post))
console.clear()

const filteredPosts = posts.filter(post => post.userId === 2)
console.log(filteredPosts)

const mappedPosts = filteredPosts.map(post => post.id * 10)
console.log(mappedPosts)

const reducedPosts = mappedPosts.reduce((sum, post) => sum + post)
console.log(reducedPosts)

// Ternary Operator

// const rockPaperScissor = () => {
//   const arr = ['rock', 'paper', 'scissors']
//   const p1 = randomElement(arr)
//   const p2 = randomElement(arr)
//   const result =
//     p1 === p2
//       ? 'Tie Game!'
//       : p1 === 'rock' && p2 === 'paper'
//       ? 'P2 Wins!'
//       : p1 === 'paper' && p2 === 'scissors'
//       ? 'P2 Wins!'
//       : p1 === 'scissors' && p2 === 'rock'
//       ? 'P2 Wins!'
//       : 'P1 Wins!'

//   console.log(`P1 chose ${p1}, P2 chose ${p2}, so ${result}`)
// }
// const randomElement = arr => arr[Math.floor(Math.random() * arr.length)]

// rockPaperScissor()

// User input
// confirm() // Ok = true, Cancel = false
// prompt('Enter something:') // Cancel = null
// console.log(prompt('enter message:') ?? 'You chose Cancel')
