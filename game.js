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
  constructor(lang, exp = 0) {
    this._lang = lang
    this._exp = exp
    this._type = 'Full Stack'
  }
  get lang() {
    return this._lang
  }
  set lang(_lang) {
    this._lang = lang
  }
  toString() {
    console.log(
      `${this._type} developer with ${this._exp} years of ${this.lang} experience.`
    )
  }
}

const newDev = new Dev('JavaScript', 6)
newDev.toString()
