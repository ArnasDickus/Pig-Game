

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
  constructor(){
    // Properties
    this.buttonRoll   = elements.buttonRoll;
    this.buttonHold   = elements.buttonHold;
    this.buttonNew    = elements.buttonNew
    this.dice1        = elements.dice1;
    this.dice2        = elements.dice2;
    this.current0     = elements.current0;
    this.current1     = elements.current1;
    this.player0Panel = elements.player0Panel;
    this.player1Panel = elements.player1Panel;
    this.playerActive = elements.playerActive;
    this.score        = elements.score;
    this.score0       = elements.score0;
    this.score1       = elements.score1;
    this.name         = elements.name;
    this.name0        = elements.name0;
    this.name1        = elements.name1;
    this.winner       = elements.winner;

    
    // Methods
    // this.buttonRoll.addEventListener('click', () => this.rollDice());
    // this.buttonHold.addEventListener('click', () => this.holdButton());
    // this.buttonNew.addEventListener('click', () => this.initialize());
    // this.pigGame();
    this.initialize;
    this.events;
    this.nextPlayer
  }
  // All events happening  
  events(){
    let scores, roundScore, input, activePlayer, gamePlaying = true;

    this.initialize(scores, activePlayer, roundScore, gamePlaying);
    this.buttonRoll.addEventListener('click', () => this.rollDice(gamePlaying, roundScore, activePlayer));
    this.buttonHold.addEventListener('click', () => this.holdButton());
    this.buttonNew.addEventListener('click', () => this.initialize());
   
  }
  // Rolling dice Button event listener
   rollDice(gamePlaying, roundScore, activePlayer){
    
    if(gamePlaying == true) {

      // 1.Calculate random number
      let dice1 = Math.floor(Math.random() * 6) + 1;
      let dice2 = Math.floor(Math.random() * 6) + 1;

      // 2.Display Result
      this.dice1.style.display = "block";
      this.dice2.style.display = "block";
  
      this.dice1.src = '../../assets/images/dice-' + dice1 + ".png";
      this.dice2.src = '../../assets/images/dice-' + dice2 + ".png";

      // 3.Update the round score if the rolled number was NOT a 1 and didn't repeat 6
      if (dice1 !== 1 && dice2 !== 1) {
          roundScore += dice1 + dice2;

          document.querySelector('#current-' + activePlayer).textContent = roundScore;  
      } else {
          //Next player
          this.nextPlayer(activePlayer, roundScore);
      }
    }   
     

  }
  // Hold Button event listener
  holdButton(){
    if(gamePlaying == true){
        // Add CURRENT score to GLOBAL score.
        scores[activePlayer] += roundScore;

        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];  
        let winningScore;

        if(winningScore){
          winningScore = input;

        }else{
          winningScore = 100;
        }
        // Check if player won the game
        if(scores[activePlayer] >= winningScore){
          document.querySelector('#name-' + activePlayer).textContent = "Winner";
          elements.dice1.style.display = "none";
          elements.dice2.style.display = "none";
          document.querySelector('.player__' + activePlayer + '-panel').classList.add(elements.winnner);
          document.querySelector('.player__' + activePlayer + '-panel').classList.remove(elements.playerActive);

          gamePlaying = false;
        }else{
        nextPlayer();
      }
    }    
  }

  // Resets scores and starts a new game.
  initialize(scores, activePlayer, roundScore, gamePlaying){
      console.log("initalize");
      scores = [0, 0];
      activePlayer = 0;
      roundScore = 0;
    
      this.dice1.style.display = "none";
      this.dice2.style.display = "none";

      this.score0.textContent = '0';
      this.score1.textContent = '0';
      this.current0.textContent = '0';
      this.current1.textContent = '0';
      this.name0.textContent = "Player 1";
      this.name1.textContent = "Player 2";
      
      this.player0Panel.classList.remove(elements.winner);
      this.player1Panel.classList.remove(elements.winnner);
      this.player0Panel.classList.remove(elements.playerActive);
      this.player0Panel.classList.add(elements.playerActive);
      this.player1Panel.classList.remove(elements.playerActive);
      gamePlaying = true;
  }
  // Next player
  nextPlayer(activePlayer, roundScore){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    this.current0.textContent = '0';
    this.current1.textContent = '0';

    this.player0Panel.classList.toggle(elements.playerActive);
    this.player1Panel.classList.toggle(elements.playerActive);
    
    this.dice1.style.display = "none";
    this.dice2.style.display = "none";
  }

}

export default PigGame;


 /*
  pigGame(){
    let scores, roundScore, input, activePlayer, gamePlaying = true;
    init();

   
    elements.buttonRoll.addEventListener('click', function(){
      if(gamePlaying == true) {

        // 1.Random Number
        let dice1 = Math.floor(Math.random() * 6) + 1;
        let dice2 = Math.floor(Math.random() * 6) + 1;
        // 2.Display the Result
        elements.dice1.style.display = "block";
        elements.dice2.style.display = "block";
   
        elements.dice1.src = '/../Pig-Game/assets/images/dice-' + dice1 + ".png";
        elements.dice2.src = '/../Pig-Game/assets/images/dice-' + dice2 + ".png";

        // 3.Update the round score if the rolled nuber was NOT a 1 and didn't repeat 6
        if (dice1 !== 1 && dice2 !== 1) {
            //Add score
            roundScore += dice1 + dice2;
            ////////////////////////////////////////////////////////////////////////
            // WHY IS THIS NOT WORKING but below works?
            // (elements.current + activePlayer).textContent = roundScore;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
            
            
        } else {
            //Next player
            nextPlayer();
        }
      }     
    });

    // elements.buttonHold.addEventListener('click', hold)
    
    
      

    // elements.buttonNew.addEventListener('click', init);
    
    // document.querySelector(".button--submit").addEventListener('click', submit);

    function nextPlayer(){
      // Next Player
          activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
          roundScore = 0;

          elements.current0.textContent = '0';
          elements.current1.textContent = '0';

          elements.player0Panel.classList.toggle(elements.playerActive);
          elements.player1Panel.classList.toggle(elements.playerActive);
          
          elements.dice1.style.display = "none";
          elements.dice2.style.display = "none";
    }

    function init(){
  
      scores = [0, 0];
      activePlayer = 0;
      roundScore = 0;

      elements.dice1.style.display = "none";
      elements.dice2.style.display = "none";

    elements.score0.textContent = '0';
    elements.score1.textContent = '0';
    elements.current0.textContent = '0';
    elements.current1.textContent = '0';
    elements.name0.textContent = "Player 1";
    elements.name1.textContent = "Player 2";
    
    elements.player0Panel.classList.remove(elements.winner);
    elements.player1Panel.classList.remove(elements.winnner);
    elements.player0Panel.classList.remove(elements.playerActive);
    elements.player0Panel.classList.add(elements.playerActive);
    elements.player1Panel.classList.remove(elements.playerActive);
    gamePlaying = true;


    }
    function hold(){
      if(gamePlaying == true){
        // Add CURRENT score to GLOBAL score.
        scores[activePlayer] += roundScore;

        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
          
          let winningScore;

             if(winningScore){
                winningScore = input;

              }else{
                winningScore = 100;
              }
        // Check if player won the game
        if(scores[activePlayer] >= winningScore){
          document.querySelector('#name-' + activePlayer).textContent = "Winner";
          elements.dice1.style.display = "none";
          elements.dice2.style.display = "none";
          document.querySelector('.player__' + activePlayer + '-panel').classList.add(elements.winnner);
          document.querySelector('.player__' + activePlayer + '-panel').classList.remove(elements.playerActive);

          gamePlaying = false;
        }else{
        nextPlayer();
        }
      }    
    }
   
  }
 */



