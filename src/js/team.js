export class Team {
  constructor(char1, char2, char3, char4) {
    this[0] = char1;
    this[1] = char2;
    this[2] = char3;
    this[3] = char4;
    this.length = 4;
    this[Symbol.iterator] = [][Symbol.iterator];
  }
}