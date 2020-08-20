const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {
  let card;

  beforeEach(function() {
    card = new Card(1, 'What is Kyle\'s favorite animal', ['tiger', 'snake', 'wolf'], 'wolf');
    turn = new Turn('wolf', card);
  });

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should have two arguments', function() {
    let currentGuess = turn.returnGuess();
    expect(currentGuess).to.equal('wolf');
  });

  it('should have a method to return the card', function() {
    let currentCard = turn.returnCard();
    expect(currentCard).to.equal(card);
  });

  it('should check the user\'s guess', function() {
    const turn = new Turn('tiger', card, 'wolf', 0);
    let userGuess = turn.evaluateGuess();
    expect(turn.guess).to.equal('tiger');
  })
});
