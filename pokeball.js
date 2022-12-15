class Pokeball {
  constructor() {
    this.storage = [];
  }

  throw(pokemon) {
    if (!pokemon && this.storage.length > 0) {
      return this.storage[0];
    }
    if (!pokemon && this.storage.length === 0) {
      return "There is no pokemon in this ball";
    }
    if (this.storage.length === 0) {
      this.storage.push(pokemon);
      return `you caught ${pokemon.nickname} a ${pokemon.constructor.name} pokemon`;
    } else {
      return "Pokeball not empty";
    }
  }

  isEmpty() {
    if (this.storage.length > 0) return false;
    return true;
  }

  contains() {
    if (this.storage.length > 0) {
      return this.storage[0];
    }
    return "This pokeball is empty";
  }
}

module.exports = Pokeball;
