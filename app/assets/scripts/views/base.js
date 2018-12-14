

// DOM elements for PigGame
export const elements = {
    buttonRoll:     document.querySelector(".button--roll"),
    dice1:          document.getElementById("dice-1"),
    dice2:          document.getElementById("dice-2"),
    buttonHold:     document.querySelector('.button--hold'),
    buttonNew:      document.querySelector(".button--new"),
    current0:       document.getElementById('current-0'),
    current1:       document.getElementById('current-1'),   
    player0Panel:   document.querySelector('.player__0-panel'),
    player1Panel:   document.querySelector('.player__1-panel'),
    playerActive:   document.querySelector('.player-active'),
    score0:         document.getElementById('score-0'),
    score1:         document.getElementById('score-1'),
    name0:          document.getElementById('name-0'),
    name1:          document.getElementById('name-1'),
    winner:         document.querySelector('.winner'),
    // Look in hold function
    score:          document.querySelector('#score-'),
    // Look in hold function
    name:           document.querySelector('#name-'),
};
// DOM elements for InstructionModal
export const instructionElements = {
    openInstructionModal:       document.querySelector(".open-instruction-modal"),
    instructionModal:           document.querySelector(".instruction-modal"),
    instructionModalCclsose:    document.querySelector(".instruction-modal__close"),
};