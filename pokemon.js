class Pokemon {
  constructor(nickname, hitpoints = 50, attackdamage = 10) {
    this.nickname = nickname;
    this.type = "normal";
    this.hitPoints = hitpoints;
    this.attackDamage = attackdamage;
    this.move = "tackle";
  }

  isEffectiveAgainst(pokemon) {
    if (this.type === "normal") {
      return false;
    }
  }

  isWeakTo(pokemon) {
    if (this.type === "normal") {
      return false;
    }
  }

  takeDamage(num) {
    this.hitPoints -= num;
    return this.hitPoints;
  }

  useMove() {
    return this.attackDamage;
  }

  hasFainted() {
    if (this.hitPoints > 0) return false;
    else return true;
  }
}

class FirePokemon extends Pokemon {
  constructor(nickname) {
    super(nickname);
    this.type = "fire";
  }

  isEffectiveAgainst(pokemon) {
    if (pokemon.type === "grass") return true;
    return false;
  }

  isWeakTo(pokemon) {
    if (pokemon.type === "water") return true;
    return false;
  }
}

class WaterPokemon extends Pokemon {
  constructor(nickname) {
    super(nickname);
    this.type = "water";
  }

  isEffectiveAgainst(pokemon) {
    if (pokemon.type === 'fire') return true;
    return false;
  }

  isWeakTo(pokemon) {
    if (pokemon.type === "grass") return true;
    return false;
  }
}

class GrassPokemon extends Pokemon {
  constructor(nickname) {
    super(nickname);
    this.type = "grass";
  }

  isEffectiveAgainst(pokemon) {
    if (pokemon.type === 'water') return true;
    return false;
  }

  isWeakTo(pokemon) {
    if (pokemon.type === "fire") return true;
    return false;
  }
}

module.exports = { Pokemon, FirePokemon, WaterPokemon, GrassPokemon };
