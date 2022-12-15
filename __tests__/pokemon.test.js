const {
  Pokemon,
  FirePokemon,
  WaterPokemon,
  GrassPokemon,
} = require("../pokemon");

const {
  Charmander,
  Squirtle,
  Bulbasaur,
  Rattata,
} = require("../singlePokemon");

describe("Pokemon", () => {
  test("each pokemon should have the following properties", () => {
    const newPokemon = new Pokemon("Pikachu");
    expect(newPokemon).toHaveProperty("nickname");
    expect(newPokemon).toHaveProperty("type");
    expect(newPokemon).toHaveProperty("hitPoints");
    expect(newPokemon).toHaveProperty("attackDamage");
    expect(newPokemon).toHaveProperty("move");
  });

  describe("isEffectiveAgainst", () => {
    test("if the pokemons type is normal isEffectiveAgainst should return false", () => {
      const charmander = new Pokemon("Charmander", "fire");
      const evee = new Pokemon("Bulbasaur");
      expect(evee.isEffectiveAgainst(charmander)).toBe(false);
    });
  });

  describe("isWeakTo", () => {
    test("if the pokemons type is normal isWeakTo should return false", () => {
      const charmander = new Pokemon("Charmander", "fire");
      const evee = new Pokemon("Bulbasaur");
      expect(evee.isWeakTo(charmander)).toBe(false);
    });
  });
  describe("takeDamage", () => {
    test("take damage will take a number as an argument and reduce the pokemons hit points by that many", () => {
      const eevee = new Pokemon("Eevee");
      eevee.takeDamage(20);
      expect(eevee.hitPoints).toBe(30);
    });
  });
  describe("useMove", () => {
    test("should return the pokemons attack damage", () => {
      const bulbasaur = new Pokemon("Bulbasaur", "grass");
      expect(bulbasaur.useMove()).toBe(10);
    });
  });
  describe("hasFainted, should return a boolean based on whether a pokemon has fainted", () => {
    test("should return false if the pokemons health is above 0", () => {
      const eevee = new Pokemon("Eevee");
      expect(eevee.hasFainted()).toBe(false);
    });
    test("should return true if the pokemons health is at 0", () => {
      const eevee = new Pokemon("Eevee");
      eevee.takeDamage(50);
      expect(eevee.hasFainted()).toBe(true);
    });
  });
});

describe("FirePokemon", () => {
  test("a new FirePokemon should have the type of fire", () => {
    const charmander = new FirePokemon("Charmander");
    expect(charmander.type).toEqual("fire");
  });
  test("a fire pokemon should be effective against grass pokemon", () => {
    const charmander = new FirePokemon("Charmander");
    const bulbasaur = new GrassPokemon("Bulbasaur");
    const squirtle = new WaterPokemon("Squirtle");
    expect(charmander.isEffectiveAgainst(bulbasaur)).toBe(true);
    expect(charmander.isEffectiveAgainst(squirtle)).toBe(false);
  });
  test("a fire pokemon should be weak to a water pokemon", () => {
    const charmander = new FirePokemon("Charmander");
    const bulbasaur = new GrassPokemon("Bulbasaur");
    const squirtle = new WaterPokemon("Squirtle");
    expect(charmander.isWeakTo(squirtle)).toBe(true);
    expect(charmander.isWeakTo(bulbasaur)).toBe(false);
  });
});

describe("WaterPokemon", () => {
  test("a new WaterPokemon should have the type of water", () => {
    const squirtle = new WaterPokemon("Squirtle");
    expect(squirtle.type).toEqual("water");
  });
  test("a water pokemon should be effective against fire pokemon", () => {
    const charmander = new FirePokemon("Charmander");
    const bulbasaur = new GrassPokemon("Bulbasaur");
    const squirtle = new WaterPokemon("Squirtle");
    expect(squirtle.isEffectiveAgainst(charmander)).toBe(true);
    expect(squirtle.isEffectiveAgainst(bulbasaur)).toBe(false);
  });
  test("a water pokemon should be weak to a water grass", () => {
    const charmander = new FirePokemon("Charmander");
    const bulbasaur = new GrassPokemon("Bulbasaur");
    const squirtle = new WaterPokemon("Squirtle");
    expect(squirtle.isWeakTo(bulbasaur)).toBe(true);
    expect(squirtle.isWeakTo(charmander)).toBe(false);
  });
});

describe("GrassPokemon", () => {
  test("a new GrassPokemon should have the type of grass", () => {
    const bulbasaur = new GrassPokemon("Bulbasaur");
    expect(bulbasaur.type).toEqual("grass");
  });
  test("a grass pokemon should be effective against water pokemon", () => {
    const charmander = new FirePokemon("Charmander");
    const bulbasaur = new GrassPokemon("Bulbasaur");
    const squirtle = new WaterPokemon("Squirtle");
    expect(bulbasaur.isEffectiveAgainst(squirtle)).toBe(true);
    expect(bulbasaur.isEffectiveAgainst(charmander)).toBe(false);
  });
  test("a grass pokemon should be weak to a fire pokemon", () => {
    const charmander = new FirePokemon("Charmander");
    const bulbasaur = new GrassPokemon("Bulbasaur");
    const squirtle = new WaterPokemon("Squirtle");
    expect(bulbasaur.isWeakTo(charmander)).toBe(true);
    expect(bulbasaur.isWeakTo(squirtle)).toBe(false);
  });
});

describe("Single Pokemon Tests", () => {
  describe("Charmander", () => {
    test("should have a move of ember", () => {
      const charmander = new Charmander("Fire Boi");
      expect(charmander.move).toEqual("ember");
    });
    test("should have default HP of 60", () => {
      const charmander = new Charmander("Fire Boi");
      expect(charmander.hitPoints).toBe(60);
    });
    test("should have default AD of 15", () => {
      const charmander = new Charmander("Fire Boi");
      expect(charmander.attackDamage).toBe(15);
    });
  });

  describe("Squirtle", () => {
    test("should have a move of water gun", () => {
      const squirtle = new Squirtle("Puddle Man");
      expect(squirtle.move).toEqual("water gun");
    });
    test("should have default HP of 60", () => {
      const squirtle = new Squirtle("Puddle Man");
      expect(squirtle.hitPoints).toBe(60);
    });
    test("should have default AD of 15", () => {
      const squirtle = new Squirtle("Puddle Man");
      expect(squirtle.attackDamage).toBe(15);
    });
  });

  describe("Bulbasaur", () => {
    test("should have a move of vine whip", () => {
      const bulbasaur = new Bulbasaur("Leafy Greens");
      expect(bulbasaur.move).toEqual("vine whip");
    });
    test("should have default HP of 60", () => {
      const bulbasaur = new Bulbasaur("Leafy Greens");
      expect(bulbasaur.hitPoints).toBe(60);
    });
    test("should have default AD of 15", () => {
      const bulbasaur = new Bulbasaur("Leafy Greens");
      expect(bulbasaur.attackDamage).toBe(15);
    });
  });

  describe("Rattata", () => {
    test("should have a move of tackle", () => {
      const rattata = new Rattata("Rat Man");
      expect(rattata.move).toEqual("tackle");
    });
    test("should have default HP of 50", () => {
      const rattata = new Rattata("Rat Man");
      expect(rattata.hitPoints).toBe(50);
    });
    test("should have default AD of 10", () => {
      const rattata = new Rattata("Rat Man");
      expect(rattata.attackDamage).toBe(10);
    });
  });
});
