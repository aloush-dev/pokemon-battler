const Pokeball = require("./pokeball");

class Trainer {
  constructor() {
    this.belt = [
      new Pokeball(),
      new Pokeball(),
      new Pokeball(),
      new Pokeball(),
      new Pokeball(),
      new Pokeball(),
    ];
  }

  catch(pokemon) {
    for (let i = 0; i < this.belt.length; i++) {
      if (this.belt[i].storage.length === 0) {
        return this.belt[i].throw(pokemon);
      } else{
        return 'No empty Pokeballs'
      }
    }
  }
}

module.exports = Trainer;
