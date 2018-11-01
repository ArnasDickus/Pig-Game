// This is file is for testing application only. You can safely delete it.
import $ from "jquery";

/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

class PigGame {
  constructor(){
    this.pigGame();
  }
  pigGame(){

    let scores = [0,0];
    let roundScore = 0;
    let activePlayer = 0;

    document.querySelector(".dice").style.display = 'none';

      document.getElementById('score-0').textContent = '0';
      document.getElementById('score-1').textContent = '0';
      document.getElementById('current-0').textContent = '0';
      document.getElementById('current-1').textContent = '0';
  
    document.querySelector(".button--roll").addEventListener('click', function(){
      
      // 1.Random Number
        let dice = Math.floor(Math.random() * 6) + 1;

        // 2.Display the Result
        let diceDOM = document.querySelector('.dice');
          diceDOM.style.display = "block";
          diceDOM.src = './../../assets/images/dice-' + dice + ".png";

        // 3.Update the round score if the rolled nuber was NOT a 1
        if(dice !== 1){
          // Add Score
          roundScore += dice;
          document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }else{
          // Next Player
          nextPlayer();

        }
    });

    document.querySelector('.button--hold').addEventListener('click', function(){
        // Add CURRENT score to GLOBAL score.
        scores[activePlayer] += roundScore;

        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        // Check if player won the game
        if(scores[activePlayer] >= 20){
          document.querySelector('#name-' + activePlayer).textContent = "Winner";
          document.querySelector('.dice').style.display = "none";
          document.querySelector('.player__' + activePlayer + '-panel').classList.add('winner');
          document.querySelector('.player__' + activePlayer + '-panel').classList.remove('player--active');
        }else{
        // Next Player
        nextPlayer();
        }

        

        
    });

    function nextPlayer(){
      // Next Player
          activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
          roundScore = 0;

          document.getElementById('current-0').textContent = '0';
          document.getElementById('current-1').textContent = '0';

          document.querySelector('.player__0-panel').classList.toggle('player--active');
          document.querySelector('.player__1-panel').classList.toggle('player--active');
    }
  }

}

export default PigGame;
