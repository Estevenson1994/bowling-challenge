'use strict';

function BowlingGame() {
    this.frame = 0;
    this._rollNum = 0;
    this.score = 0;
    this.isInPlay = false
    this._turn = 0;
  }

var scoreCard = [];

  BowlingGame.prototype.roll = function(score) {
    this.checkFramesToStartOrEndGame();
    this.score += score;
    this.countRollNumber();
    this.increaseFrameNum(score);
    this.addScoreToScoreCard(score);
    this._turn+= 1;
  };

  BowlingGame.prototype.checkFramesToStartOrEndGame = function() {
    this.frame < 10 ? this.startGame() : this.endGame()
  }
 
  BowlingGame.prototype.startGame = function() {
    this.isInPlay = true
  }
  BowlingGame.prototype.endGame = function() {
    this.isInPlay = false
  }

  BowlingGame.prototype.countRollNumber = function() {
    this._rollNum < 2 ? this._rollNum += 1 : this._rollNum = 1;
  }
  
  BowlingGame.prototype.increaseFrameNum = function(score) {
    if (this._turn !== 0 && scoreCard[this._turn -1].knockedPins === 10) {
      this.frame += 1
    }
    else if (this._rollNum === 1 && this.isInPlay) {
      this.frame += 1;
    }
  }
  
 BowlingGame.prototype.addScoreToScoreCard = function(score) {
    scoreCard[this._turn] = {};
    scoreCard[this._turn].frame = this.frame;
    scoreCard[this._turn].roll = this._rollNum;
    scoreCard[this._turn].knockedPins = score;
    scoreCard[this._turn].totalScore = this.score;
  }

module.exports = BowlingGame
