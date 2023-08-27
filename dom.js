// DOM - Document Object Model
const view1 = document.getElementById('view1')
console.log(view1)
const view2 = document.querySelector('#view2')
console.log(view2)

const oldViews = document.getElementsByClassName('view')
console.log(oldViews) // prints elements
const newViews = document.querySelectorAll('.view')
console.log(newViews) // prints nodes

const oldDivs = view1.getElementsByTagName('div')
console.log(oldDivs)
const newDivs = view1.querySelectorAll('div')
console.log(newDivs)

const evenDivs = view1.querySelectorAll('div:nth-of-type(2n)')
console.log(evenDivs)

for (let div of evenDivs) {
  div.style.backgroundColor = 'darkblue'
}

const navText = document.querySelector('nav h1')
navText.textContent = 'Hello World'
const navbar = document.querySelector('nav')
navbar.innerHTML = `<h1>The DOM</h1> <p>Document Object Model</p>`
navbar.style.justifyContent = 'space-between'

// hasChildNodes(), firstChild, lastChild, lastElementChild
console.log(evenDivs[0].parentElement.children)
console.log(evenDivs[0].parentElement.childNodes)
console.log(evenDivs[0].nextSibling) // previousSibling
console.log(evenDivs[0].nextElementSibling) // previousElementSibling

view1.style.display = 'none'
view2.style.display = 'flex'

view2.style.flexDirection = 'row'
view2.style.flexWrap = 'wrap'
view2.style.margin = '10px'

while (view2.lastChild) {
  view2.lastChild.remove()
}

const createDivs = (parent, iter) => {
  const newDiv = document.createElement('div')
  newDiv.textContent = iter
  newDiv.style.backgroundColor = '#000'
  newDiv.style.width = '100px'
  newDiv.style.height = '100px'
  newDiv.style.margin = '10px'
  newDiv.style.display = 'flex'
  newDiv.style.justifyContent = 'center'
  newDiv.style.alignItems = 'center'
  parent.append(newDiv)
}

for (let i = 1; i <= 12; i++) {
  createDivs(view2, i)
}
