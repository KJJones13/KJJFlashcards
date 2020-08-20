class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
    this.correctAnswer = card.correctAnswer
  }

  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.card;
  }

  evaluateGuess() {
    if (this.guess === this.correctAnswer) {
      return true;
    } else {
      return false;
    }
  }

  giveFeedback() {
    if (this.guess === this.correctAnswer) {
      return 'correct';
    } else {
      return 'incorrect';
    }
  }
}

module.exports = Turn;
