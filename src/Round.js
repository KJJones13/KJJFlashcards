const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck.cards[this.turns];
  }

  takeTurn(guess) {
    let turn = new Turn(guess, this.deck.cards[this.turns]);
    this.turns++;
    if (turn.evaluateGuess() == true) {
      return turn.giveFeedback();
    } else {
      this.incorrectGuesses.push(turn.returnCard().id);
      return turn.giveFeedback();
    }
  }

  calculatePercentCorrect() {
    let percentCorrect = this.incorrectGuesses.length / this.turns;
    return percentCorrect * 100;
  }
}

module.exports = Round;
