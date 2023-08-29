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
console.clear()

// Promises
const myPromise = new Promise((resolve, reject) => {
  const error = false
  if (!error) {
    resolve('myPromise Resolved!')
  } else {
    reject('myPromise Rejected!')
  }
})

const nextPromise = new Promise((resolve, reject) => {
  const error = false
  if (!error) {
    setTimeout(() => {
      resolve('nextPromise Resolved!')
    }, 1)
  } else {
    reject('nextPromise Rejected!')
  }
})

nextPromise.then(value => {
  console.log(value)
})

myPromise
  .then(value => {
    console.log(value)
    return value + 1
  })
  .then(newValue => {
    console.log(newValue)
  })
  .catch(err => {
    console.log(err)
  })

const users = fetch('https://jsonplaceholder.typicode.com/users')
console.log(users)

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    return response.json()
  })
  .then(data => {
    console.log(data)
  })

// Async

const asyncFunction = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const jsonUserData = await response.json()
  return jsonUserData
}

const nextAsync = async () => {
  const data = await asyncFunction()
  console.log(data)
}

nextAsync()

const getDadJoke = async () => {
  const response = await fetch('https://icanhazdadjoke.com/', {
    method: 'GET',
    headers: {
      // Accept: 'application/json'
      Accept: 'text/plain'
    }
  })
  const jokeData = await response.text()
  // console.log(jokeData.joke)
  console.log(jokeData)
}

getDadJoke()

const jokeObj = {
  id: '0oO71TSv4Ed',
  joke: 'Why was it called the dark ages? Because of all the knights.'
}

const postDadJoke = async jokeObj => {
  const response = await fetch('https://httpbin.org/post', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(jokeObj)
  })
  const jsonResponse = await response.json()
  console.log(jsonResponse)
}

postDadJoke(jokeObj)

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
