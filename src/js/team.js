export class Team {
  constructor(...characters) {
    this.characters = [...characters];
    this.from = this.characters[0];
    this.to = this.characters[this.characters.length - 1];
    this.fromIndex = 1;
    this.toIndex = this.characters.length;
  }

  [Symbol.iterator]() {
    this.current = this.from;
    this.currentIndex = this.fromIndex;
    return this;
  }

  next() {
    if (this.currentIndex <= this.toIndex) {
      this.currentIndex++;
      return { done: false, value: this.characters[this.currentIndex - 2] };
    } else {
      return { done: true };
    }
  }
}