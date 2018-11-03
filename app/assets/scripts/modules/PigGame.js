

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
    let scores, roundScore, input, activePlayer, gamePlaying = true;
    init();

    let lastDice;


    document.querySelector(".button--roll").addEventListener('click', function(){
      if(gamePlaying == true) {

        // 1.Random Number
        let dice1 = Math.floor(Math.random() * 6) + 1;
        let dice2 = Math.floor(Math.random() * 6) + 1;
        // 2.Display the Result
        document.getElementById("dice-1").style.display = "block";
        document.getElementById("dice-2").style.display = "block";
   
          document.getElementById("dice-1").src = './../../assets/images/dice-' + dice1 + ".png";
           document.getElementById("dice-2").src = './../../assets/images/dice-' + dice2 + ".png";

        // 3.Update the round score if the rolled nuber was NOT a 1 and didn't repeat 6
        if (dice1 !== 1 && dice2 !== 1) {
            //Add score
            roundScore += dice1 + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            //Next player
            nextPlayer();
        }

      //   if(dice === 6  ){
      //     // Player Losses scores
      //     // && lastDice === 6
      //     scores[activePlayer] = 0;
      //     document.querySelector('#score-' + activePlayer).textContent = 0;

      //     nextPlayer();
      //   }else if (dice !== 1){
      //     // Add scores
      //     roundScore += dice;
      //     document.querySelector("#current-" + activePlayer).textContent = roundScore;
      //   }else{
      //     // Next player
      //     nextPlayer();
      //   }
      // lastDice = dice;  
      }     
    });

    document.querySelector('.button--hold').addEventListener('click', function(){
       if(gamePlaying == true){
        // Add CURRENT score to GLOBAL score.
        scores[activePlayer] += roundScore;

        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
      
        
        
        // Undefined, 0, null or "" are COERCED to false
        // Anything else is COERCED to true;
          let winningScore;
          // let input = document.querySelector(".final-score").value;
           let input = submit();
           console.log(input);

             if(submit()){
                winningScore = input;

              }else{
                winningScore = 100;
              }
        // Check if player won the game
        if(scores[activePlayer] >= winningScore){
          document.querySelector('#name-' + activePlayer).textContent = "Winner";
          document.getElementById('dice-1').style.display = "none";
          document.getElementById('dice-2').style.display = "none";
          document.querySelector('.player__' + activePlayer + '-panel').classList.add('winner');
          document.querySelector('.player__' + activePlayer + '-panel').classList.remove('player--active');

          gamePlaying = false;
        }else{
        // Next Player
        nextPlayer();
        }
       }    
    });

    document.querySelector(".button--new").addEventListener('click', init);
    
    document.querySelector(".button--submit").addEventListener('click', submit);

    function nextPlayer(){
      // Next Player
          activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
          roundScore = 0;

          document.getElementById('current-0').textContent = '0';
          document.getElementById('current-1').textContent = '0';

          document.querySelector('.player__0-panel').classList.toggle('player--active');
          document.querySelector('.player__1-panel').classList.toggle('player--active');
          
          document.getElementById('dice-1').style.display = "none";
          document.getElementById('dice-2').style.display = "none";
    }

    function init(){
  
      scores = [0, 0];
      activePlayer = 0;
      roundScore = 0;

      document.getElementById('dice-1').style.display = "none";
      document.getElementById('dice-2').style.display = "none";

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = "Player 1";
    document.getElementById('name-1').textContent = "Player 2";
    
    document.querySelector('.player__0-panel').classList.remove('winner');
    document.querySelector('.player__1-panel').classList.remove('winner');
    document.querySelector('.player__0-panel').classList.remove('player--active');
    document.querySelector('.player__0-panel').classList.add('player--active');
    document.querySelector('.player__1-panel').classList.remove('player--active');
    gamePlaying = true;


    }
     function submit(){
        return document.querySelector(".final-score").value;
     }
  }

}

export default PigGame;
