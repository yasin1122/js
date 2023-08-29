export default class User {
  #email
  #name
  constructor(email, name) {
    this.#email = email
    this.#name = name
  }
  greeting() {
    return `Hi, my name is ${this.#name}`
  }
}
