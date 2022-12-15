const {
  Charmander,
  Squirtle,
  Bulbasaur,
  Rattata,
} = require("../singlePokemon");

const Pokeball = require("../pokeball");

describe("Pokeballs", () => {
  test("the throw method takes a pokemon as an argument and if empty capture the pokemon within the ball", () => {
    const pokeball = new Pokeball();
    const charmander = new Charmander("Fire Boi");
    expect(pokeball.throw(charmander)).toEqual(
      "you caught Fire Boi a Charmander pokemon"
    );
    expect(pokeball.storage).toEqual([
      {
        nickname: "Fire Boi",
        type: "fire",
        hitPoints: 60,
        attackDamage: 15,
        move: "ember",
      },
    ]);
  });
  test("when the throw method is invoked with no arugment return the stored pokemon", () => {
    const pokeball = new Pokeball();
    const charmander = new Charmander("Fire Boi");
    pokeball.throw(charmander);
    expect(pokeball.throw()).toEqual({
      nickname: "Fire Boi",
      type: "fire",
      hitPoints: 60,
      attackDamage: 15,
      move: "ember",
    });
  });
  test("when the throw method is invoked with no arugment and the pokeball is empty, inform the user", () => {
    const pokeball = new Pokeball();
    expect(pokeball.throw()).toEqual("There is no pokemon in this ball");
  });
  test("isEmpty should return true if there is not a pokemon inside the ball", () => {
    const pokeball = new Pokeball();
    expect(pokeball.isEmpty()).toBe(true);
  });
  test("isEmpty should return false if there is a pokemon inside the ball", () => {
    const pokeball = new Pokeball();
    const charmander = new Charmander("Fire Boi");
    pokeball.throw(charmander);
    expect(pokeball.isEmpty()).toBe(false);
  });
  test("contains method should return the name of the pokemon store inside the ball", () => {
    const pokeball = new Pokeball();
    const charmander = new Charmander("Fire Boi");
    pokeball.throw(charmander);
    expect(pokeball.contains()).toEqual({
      nickname: "Fire Boi",
      type: "fire",
      hitPoints: 60,
      attackDamage: 15,
      move: "ember",
    });
  });
  test("contains method should return empty if there is no pokemon inside the ball", () => {
    const pokeball = new Pokeball();
    expect(pokeball.contains()).toEqual("This pokeball is empty");
  });
});
