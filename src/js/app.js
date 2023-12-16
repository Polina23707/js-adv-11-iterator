// TODO: write your code here
import { Team } from "./team";
import { Character } from "./character";

console.log('worked');

let char1 = new Character('Лучник1', 'Bowman');
let char2 = new Character('Лучник2', 'Bowman');
let char3 = new Character('Лучник3', 'Bowman');
let char4 = new Character('Лучник4', 'Bowman');
let char5 = new Character('Лучник5', 'Bowman');

let team = new Team (char1, char2, char3, char4, char5);

for (let char of team) {
  console.log(char);
}
