// String methods
console.log(typeof 'Hello World!')
const msg = 'Hello World!'
console.log(msg.charAt(0))
console.log(msg.indexOf('el'))
console.log(msg.lastIndexOf('l'))
console.log(msg.slice(6, 11))
console.log(msg.toUpperCase())
console.log(msg.includes('ello'))
console.log(msg.split('l')) // l not included

// Number methods
const num = 12
console.log(Number('11') + 11)
console.log(Number('hello'), Number(undefined), Number(true))
console.log(Number.isInteger(num))
console.log(Number.parseFloat('11.22aa')) // removes the 'aa'
console.log((11.1234).toFixed(2)) // returns a string
console.log(num.toString())
console.log(Number.isNaN(num))

// Math methods
const pie = Math.PI
console.log(Math.PI)
console.log(Math.trunc(Math.PI), Math.round(3.99))
console.log(Math.ceil(pie), Math.floor(pie))
console.log(Math.pow(2, 10))
console.log(Math.min(2, 0.5, 11), Math.max(1, 4, 2))
console.log(Math.floor(Math.random() * 10) + 1)
