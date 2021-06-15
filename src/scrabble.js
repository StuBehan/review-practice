class Scrabble {
  constructor(scrabbleWord) {
    this.scrabbleWord = scrabbleWord;
    this.score = this.evaluateScore();
  };

  evaluateScore() {
    if (this.scrabbleWord === 'a') {
      return this.score = 1
    } else if (this.scrabbleWord === 'd') {
      return this.score = 2
    }
    
  }
};