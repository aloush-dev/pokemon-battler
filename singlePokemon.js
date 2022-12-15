const {
  Pokemon,
  FirePokemon,
  WaterPokemon,
  GrassPokemon,
} = require("./pokemon");

class Charmander extends FirePokemon {
  constructor(nickname) {
    super(nickname);
    this.move = "ember";
    this.hitPoints = 60;
    this.attackDamage = 15;
  }
}

class Squirtle extends WaterPokemon {
  constructor(nickname) {
    super(nickname);
    this.move = "water gun";
    this.hitPoints = 60;
    this.attackDamage = 15;
  }
}

class Bulbasaur extends GrassPokemon {
  constructor(nickname) {
    super(nickname);
    this.move = "vine whip";
    this.hitPoints = 60;
    this.attackDamage = 15;
  }
}

class Rattata extends Pokemon {
  constructor(nickname) {
    super(nickname);
  }
}

module.exports = { Charmander, Squirtle, Bulbasaur, Rattata };
