const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.startTime = new Date();
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
    let percentCorrect = (this.deck.countCards() - this.incorrectGuesses.length) / this.turns;
    return percentCorrect * 100;
  }

  endRound() {
    let endTime = new Date();
    let totalTimeSec = (endTime - this.startTime) / 1000;
    let totalMin = Math.floor(totalTimeSec / 60);
    let totalSec = (totalTimeSec % 60).toFixed(2);

    console.log(`**Round over!** You answered ${this.calculatePercentCorrect().toFixed(2)}% of the questions correctly!`)
    console.log(`This round took ${totalMin} minutes and ${totalSec} seconds!`)
  }
}

module.exports = Round;
