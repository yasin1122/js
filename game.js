// arrays
let arr = [1, 2, 3, 4]

arr.push('hello')
arr.push('world')

arr.unshift(1)
arr.shift()
delete arr[1]

console.log(arr)

arr = [0, 1, 2, 3, 4, 5, 6]
arr.splice(1, 1, 10)
console.log(arr)

console.log(arr.reverse())
console.log(arr.join(' '))

let str = '123'
let strArr = str.split('')
console.log(strArr)
console.log(arr.concat(strArr))
let arrMore = [...arr, 7, 8, 9]
console.log(arrMore)

// objects
const obj = {
  lang: 'javascript',
  exp: 6,
  tools: {
    lib: 'react',
    framework: 'next'
  },
  greet() {
    console.log(`Hello ${this.lang.toUpperCase()} World!`)
  }
}

console.log(obj['tools']['lib'])
obj.greet()
obj.dev = 'front end'
delete obj.dev
console.log(obj.hasOwnProperty('dev'))

for (let key in obj) {
  console.log(key, obj[key])
}

const { lang, exp } = obj
console.log(lang, exp)

const printer = ({ lang, exp }) => {
  console.log(`${exp} years of ${lang} experience.`)
}
printer(obj)

// classes
class Dev {
  #lang
  #exp
  constructor(lang, exp = 0) {
    this.#lang = lang
    this.#exp = exp
  }
  get lang() {
    return this.#lang
  }
  set lang(lang) {
    this.#lang = lang
  }
  get exp() {
    return this.#exp
  }
  set exp(exp) {
    this.#exp = exp
  }
}

class SuperDev extends Dev {
  status
  #type
  constructor(lang, exp) {
    super(lang, exp)
    this.#type = 'Full Stack'
    this.status = 'Hello World'
  }
  get type() {
    return this.#type
  }
  set type(type) {
    this.#type = type
  }
  toString() {
    console.log(
      `${this.type} developer with ${this.exp} years of ${this.lang} experience.`
    )
  }
}

const newDev = new SuperDev('JavaScript', 6)
newDev.exp = 11
newDev.toString()
