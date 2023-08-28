// Event Listeners

// const changeColor = () => {
//   const currentColor = getComputedStyle(h2).backgroundColor
//   if (currentColor === 'rgb(0, 0, 0)') {
//     h2.style.backgroundColor = '#333'
//   } else {
//     h2.style.backgroundColor = '#000'
//   }
// }

// h2.addEventListener('click', changeColor, false)
// h2.removeEventListener('click', changeColor, false)

// h2.addEventListener('click', event => {
//   event.target.textContent = 'Clicked'
// })

document.addEventListener('readystatechange', event => {
  if (event.target.readyState === 'complete') {
    console.log('readyState: complete')
  }
  initApp()
})

// const initApp = () => {
//   const view = document.querySelector('#view2')
//   const div = view.querySelector('div')
//   const h2 = div.querySelector('h2')

//   view.addEventListener('click', event => {
//     view.classList.toggle('purple')
//     view.classList.toggle('darkblue')
//   })

//   div.addEventListener('click', event => {
//     div.classList.toggle('blue')
//     div.classList.toggle('black')
//   })

//   h2.addEventListener('click', event => {
//     // event.stopPropagation()
//     const myText = event.target.textContent
//     myText === 'My 2nd View'
//       ? (event.target.textContent = 'Clicked')
//       : (event.target.textContent = 'My 2nd View')
//   })

//   const nav = document.querySelector('nav')
//   const handleMouseOver = event => {
//     event.target.classList.add('height100')
//   }

//   const handleMouseOut = event => {
//     event.target.classList.remove('height100')
//   }

//   nav.addEventListener('mouseover', handleMouseOver)
//   nav.addEventListener('mouseout', handleMouseOut)
// }

const initApp = () => {
  const view3 = document.querySelector('#view3')
  const myForm = view3.querySelector('#myForm')

  myForm.addEventListener('submit', event => {
    event.preventDefault()
    console.log('hello')
  })
}

// Storage
const hobbies = ['eat', 'sleep', 'code']
const devObj = {
  name: 'Yasin',
  hobbies: ['eat', 'sleep', 'code'],
  logName() {
    console.log(`My name is ${this.name}.`)
  }
}

sessionStorage.setItem('sessionStore', JSON.stringify(devObj))
const sessionData = JSON.parse(sessionStorage.getItem('sessionStore'))
console.log(sessionData)

localStorage.setItem('localStore', JSON.stringify(hobbies))
const localKey = localStorage.key(0)
const localData = JSON.parse(localStorage.getItem('localStore'))
console.log(localKey, localStorage.length, localData)
localStorage.removeItem('localStore') // clears local storage
