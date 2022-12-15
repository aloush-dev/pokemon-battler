const Trainer = require("../trainer");
const {
  Charmander,
  Squirtle,
  Bulbasaur,
  Rattata,
} = require("../singlePokemon");

describe("trainer", () => {
  test("should have a belt property which contains 6 pokeballs", () => {
    const ashTrainer = new Trainer("Ash");
    expect(ashTrainer).toHaveProperty("belt");
    expect(ashTrainer.belt).toHaveLength(6);
  });
  test("catch method takes a Pokemon as an argument and captures that pokemon with one of the empty pokeballs.", () => {
    const ashTrainer = new Trainer("Ash");
    const charmander = new Charmander("Fire Boi");
    expect(ashTrainer.catch(charmander)).toEqual(
      "you caught Fire Boi a Charmander pokemon"
    );
  });
  test("catch method takes a Pokemon as an argument and return no empty pokeballs if there is no empty pokeballs", () => {
    const ashTrainer = new Trainer("Ash");
    const charmander = new Charmander("Fire Boi");
    ashTrainer.catch(charmander)
    ashTrainer.catch(charmander)
    ashTrainer.catch(charmander)
    ashTrainer.catch(charmander)
    ashTrainer.catch(charmander)
    ashTrainer.catch(charmander)
    expect(ashTrainer.catch(charmander)).toEqual(
      "No empty Pokeballs"
    );
  });
});
