import { Team } from "../team";
import { Character } from "../character";

test('should create team', () => {
  let char1 = new Character('Лучник1', 'Bowman');
  let char2 = new Character('Лучник2', 'Bowman');
  let char3 = new Character('Лучник3', 'Bowman');
  let char4 = new Character('Лучник4', 'Bowman');
  let team = new Team (char1, char2, char3, char4);
  
  let itaration = [...team];

  let result = [char1, char2, char3, char4]
  expect(itaration).toEqual(result);
});
