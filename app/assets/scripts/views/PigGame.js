

/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game


*/

import base, { elements } from "./base";
 

class PigGame {
  constructor(scores, roundScore, input, activePlayer, gamePlaying){
    // Properties DOM Elements
    this.buttonRoll       = elements.buttonRoll;
    this.buttonHold       = elements.buttonHold;
    this.buttonNew        = elements.buttonNew
    this.dice1            = elements.dice1;
    this.dice2            = elements.dice2;
    this.current0         = elements.current0;
    this.current1         = elements.current1;
    this.player0Panel     = elements.player0Panel;
    this.player1Panel     = elements.player1Panel;
    this.score            = elements.score;
    this.score0           = elements.score0;
    this.score1           = elements.score1;
    this.name             = elements.name;
    this.name0            = elements.name0;
    this.name1            = elements.name1;
    this.winner           = elements.winner; 
    this.changeScoreForm  = elements.changeScoreForm;
    this.defaultScore     = elements.defaultScore;
    this.currentScore     = elements.currentScore;

    // Properties Variables
    this.scores       =  scores;
    this.roundScore   =  roundScore;
    this.input        =  input;
    this.activePlayer =  activePlayer;
    this.gamePlaying  =  gamePlaying;

    // Methods
    this.initialize;
    this.events;
    this.nextPlayer;
    this.changeScore;
  }
  // All events happening  
  events(){
    
    this.initialize();
    this.changeScoreForm.addEventListener('submit', event => this.changeScore(event));
    this.buttonRoll.addEventListener('click', () => this.rollDice());
    this.buttonHold.addEventListener('click', () => this.holdButton());
    this.buttonNew.addEventListener('click', () => this.initialize());
    
   
  }
  // Rolling dice Button event listener
  rollDice(){
    
    if(this.gamePlaying == true) {

      // 1.Calculate random number
      let dice1 = Math.floor(Math.random() * 6) + 1;
      let dice2 = Math.floor(Math.random() * 6) + 1;

      // 2.Display Result
      this.dice1.style.display = "block";
      this.dice2.style.display = "block";
      this.dice1.src = 'assets/images/dice-' + dice1 + ".png";
      this.dice2.src = 'assets/images/dice-' + dice2 + ".png";

      // 3.Update the round score if the rolled number was NOT a 1 and didn't repeat 6
      // 
      if (dice1 !== 1 && dice2 !== 1) {

          this.roundScore += dice1 + dice2;
          document.querySelector('#current-' + this.activePlayer).textContent = this.roundScore; 
          
      } else {
          //Next player
          alert("Ooops you rolled two 1");
          this.nextPlayer();
      }
    }   
     

  }
  // Hold Button event listener
  holdButton(){
    if(this.gamePlaying == true){
        // Add CURRENT score to GLOBAL score.
        this.scores[this.activePlayer] += this.roundScore;

        // Custom Score
        if(this.defaultScore.value == ""){
          this.defaultScore.value = 100;
        }
        // Update the UI
        document.querySelector('#score-' + this.activePlayer).textContent = this.scores[this.activePlayer];
        
        // Check if player won the game
        if(this.scores[this.activePlayer] >= this.defaultScore.value){
          document.querySelector('#name-' + this.activePlayer).textContent = "Winner";
          this.dice1.style.display = "none";
          this.dice2.style.display = "none";
          document.querySelector('.player__' + this.activePlayer + '-panel').classList.add(this.winner);
          document.querySelector('.player__' + this.activePlayer + '-panel').classList.remove(this.playerActive);
          this.gamePlaying = false;
        }else{
        this.nextPlayer();
      }
    }    
  }

  // Resets scores and starts a new game.
  initialize(){
      this.scores = [0, 0];
      this.activePlayer = 0;
      this.roundScore = 0;
    
      this.dice1.style.display = "none";
      this.dice2.style.display = "none";

      this.score0.textContent = '0';
      this.score1.textContent = '0';
      this.current0.textContent = '0';
      this.current1.textContent = '0';
      this.name0.textContent = "Player 1";
      this.name1.textContent = "Player 2";
      
      this.player0Panel.classList.remove(this.winner);
      this.player1Panel.classList.remove(this.winner);

      this.player0Panel.classList.remove('player--active');
      this.player0Panel.classList.add('player--active');
      this.player1Panel.classList.remove('player--active');
      this.gamePlaying = true;

      
  }
  // Next player
  nextPlayer(){
    this.activePlayer === 0 ? this.activePlayer = 1 : this.activePlayer = 0;
    this.roundScore = 0;

    this.current0.textContent = '0';
    this.current1.textContent = '0';

    this.player0Panel.classList.toggle('player--active');
    this.player1Panel.classList.toggle('player--active');
    
    this.dice1.style.display = "none";
    this.dice2.style.display = "none";
  }
  // Let's user manually change winning scores
  changeScore(event){
    event.preventDefault();
    this.currentScore.innerHTML = `${this.defaultScore.value}`;
  }

}

export default PigGame;
