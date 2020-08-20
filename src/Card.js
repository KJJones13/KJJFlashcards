class Card {
  constructor(num, question, answers, correctAnswer) {
    this.id = num;
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  }

  getCorrectAnswer() {
    return this.correctAnswer;
  }
}

module.exports = Card;
