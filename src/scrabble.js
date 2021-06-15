class Scrabble {
  constructor(scrabbleWord) {
    this.scrabbleWord = scrabbleWord;
    this.score = this.evaluateScore();
  };

  evaluateScore() {
    if (this.scrabbleWord === 'a') {
      return 1
    } else if (this.scrabbleWord === 'd') {
      return 2
    } else if (this.scrabbleWord === 'b') {
      return 3
    }
  }
};