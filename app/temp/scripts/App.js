/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views_PigGame_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _views_InstructionModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);


var pigGame = new _views_PigGame_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
var instructionModal = new _views_InstructionModal__WEBPACK_IMPORTED_MODULE_1__["default"]();
pigGame.events();
instructionModal.events(); // Testing-comments

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game


*/


var PigGame =
/*#__PURE__*/
function () {
  function PigGame(scores, roundScore, input, activePlayer, gamePlaying) {
    _classCallCheck(this, PigGame);

    // Properties DOM Elements
    this.buttonRoll = _base__WEBPACK_IMPORTED_MODULE_0__["elements"].buttonRoll;
    this.buttonHold = _base__WEBPACK_IMPORTED_MODULE_0__["elements"].buttonHold;
    this.buttonNew = _base__WEBPACK_IMPORTED_MODULE_0__["elements"].buttonNew;
    this.dice1 = _base__WEBPACK_IMPORTED_MODULE_0__["elements"].dice1;
    this.dice2 = _base__WEBPACK_IMPORTED_MODULE_0__["elements"].dice2;
    this.current0 = _base__WEBPACK_IMPORTED_MODULE_0__["elements"].current0;
    this.current1 = _base__WEBPACK_IMPORTED_MODULE_0__["elements"].current1;
    this.player0Panel = _base__WEBPACK_IMPORTED_MODULE_0__["elements"].player0Panel;
    this.player1Panel = _base__WEBPACK_IMPORTED_MODULE_0__["elements"].player1Panel;
    this.playerActive = _base__WEBPACK_IMPORTED_MODULE_0__["elements"].playerActive;
    this.score = _base__WEBPACK_IMPORTED_MODULE_0__["elements"].score;
    this.score0 = _base__WEBPACK_IMPORTED_MODULE_0__["elements"].score0;
    this.score1 = _base__WEBPACK_IMPORTED_MODULE_0__["elements"].score1;
    this.name = _base__WEBPACK_IMPORTED_MODULE_0__["elements"].name;
    this.name0 = _base__WEBPACK_IMPORTED_MODULE_0__["elements"].name0;
    this.name1 = _base__WEBPACK_IMPORTED_MODULE_0__["elements"].name1;
    this.winner = _base__WEBPACK_IMPORTED_MODULE_0__["elements"].winner; // Properties Variables

    this.scores = scores;
    this.roundScore = roundScore;
    this.input = input;
    this.activePlayer = activePlayer;
    this.gamePlaying = gamePlaying; // Methods

    this.initialize;
    this.events;
    this.nextPlayer;
  } // All events happening  


  _createClass(PigGame, [{
    key: "events",
    value: function events() {
      var _this = this;

      this.initialize();
      this.buttonRoll.addEventListener('click', function () {
        return _this.rollDice();
      });
      this.buttonHold.addEventListener('click', function () {
        return _this.holdButton();
      });
      this.buttonNew.addEventListener('click', function () {
        return _this.initialize();
      });
    } // Rolling dice Button event listener

  }, {
    key: "rollDice",
    value: function rollDice() {
      if (this.gamePlaying == true) {
        // 1.Calculate random number
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1; // 2.Display Result

        this.dice1.style.display = "block";
        this.dice2.style.display = "block";
        this.dice1.src = 'assets/images/dice-' + dice1 + ".png";
        this.dice2.src = 'assets/images/dice-' + dice2 + ".png"; // 3.Update the round score if the rolled number was NOT a 1 and didn't repeat 6
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
    } // Hold Button event listener

  }, {
    key: "holdButton",
    value: function holdButton() {
      if (this.gamePlaying == true) {
        // Add CURRENT score to GLOBAL score.
        this.scores[this.activePlayer] += this.roundScore; // Update the UI

        document.querySelector('#score-' + this.activePlayer).textContent = this.scores[this.activePlayer]; // Check if player won the game

        if (this.scores[this.activePlayer] >= 100) {
          document.querySelector('#name-' + this.activePlayer).textContent = "Winner";
          this.dice1.style.display = "none";
          this.dice2.style.display = "none";
          document.querySelector('.player__' + this.activePlayer + '-panel').classList.add(this.winner);
          document.querySelector('.player__' + this.activePlayer + '-panel').classList.remove(this.playerActive);
          this.gamePlaying = false;
        } else {
          this.nextPlayer();
        }
      }
    } // Resets scores and starts a new game.

  }, {
    key: "initialize",
    value: function initialize() {
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
      this.player0Panel.classList.remove(this.playerActive);
      this.player0Panel.classList.add(this.playerActive);
      this.player1Panel.classList.remove(this.playerActive);
      this.gamePlaying = true;
    } // Next player

  }, {
    key: "nextPlayer",
    value: function nextPlayer() {
      this.activePlayer === 0 ? this.activePlayer = 1 : this.activePlayer = 0;
      this.roundScore = 0;
      this.current0.textContent = '0';
      this.current1.textContent = '0';
      this.player0Panel.classList.toggle(this.playerActive);
      this.player1Panel.classList.toggle(this.playerActive);
      this.dice1.style.display = "none";
      this.dice2.style.display = "none";
    }
  }]);

  return PigGame;
}();

/* harmony default export */ __webpack_exports__["default"] = (PigGame);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elements", function() { return elements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "instructionElements", function() { return instructionElements; });
// DOM elements for PigGame
var elements = {
  buttonRoll: document.querySelector(".button--roll"),
  dice1: document.getElementById("dice-1"),
  dice2: document.getElementById("dice-2"),
  buttonHold: document.querySelector('.button--hold'),
  buttonNew: document.querySelector(".button--new"),
  current0: document.getElementById('current-0'),
  current1: document.getElementById('current-1'),
  player0Panel: document.querySelector('.player__0-panel'),
  player1Panel: document.querySelector('.player__1-panel'),
  playerActive: document.querySelector('.player-active'),
  score0: document.getElementById('score-0'),
  score1: document.getElementById('score-1'),
  name0: document.getElementById('name-0'),
  name1: document.getElementById('name-1'),
  winner: document.querySelector('.winner'),
  // Look in hold function
  score: document.querySelector('#score-'),
  // Look in hold function
  name: document.querySelector('#name-')
}; // DOM elements for InstructionModal

var instructionElements = {
  openInstructionModal: document.querySelector(".open-instruction-modal"),
  instructionModal: document.querySelector(".instruction-modal"),
  instructionModalClose: document.querySelector(".instruction-modal__close")
};

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var InstructionModal =
/*#__PURE__*/
function () {
  function InstructionModal() {
    _classCallCheck(this, InstructionModal);

    // DOM Properties
    this.openInstructionModal = _base__WEBPACK_IMPORTED_MODULE_0__["instructionElements"].openInstructionModal;
    this.instructionModal = _base__WEBPACK_IMPORTED_MODULE_0__["instructionElements"].instructionModal;
    this.instructionModalClose = _base__WEBPACK_IMPORTED_MODULE_0__["instructionElements"].instructionModalClose;
    this.document = document.body; // Methods

    this.events;
    this.openModal;
    this.closeModal;
    this.keyPressHandler;
  } // Order for function to happen.


  _createClass(InstructionModal, [{
    key: "events",
    value: function events() {
      var _this = this;

      // Clicking the open Modal openModalButton
      this.openInstructionModal.addEventListener('click', function () {
        return _this.openModal();
      }); // Clicking the x close modal openModalButton

      this.instructionModal.addEventListener('click', function () {
        return _this.closeModal();
      }); // pushes any key
      // $(document).keyup(this.keyPressHandler.bind(this));

      this.document.addEventListener('keyup', function () {
        return _this.keyPressHandler(event);
      });
    } // Pushes any key to close  

  }, {
    key: "keyPressHandler",
    value: function keyPressHandler(event) {
      if (event.which == 27) {
        this.closeModal();
      }
    } // Open modal

  }, {
    key: "openModal",
    value: function openModal() {
      this.instructionModal.classList.add("instruction-modal--is-visible");
      return false;
    } // Close modal

  }, {
    key: "closeModal",
    value: function closeModal() {
      this.instructionModal.classList.remove("instruction-modal--is-visible");
    }
  }]);

  return InstructionModal;
}();

/* harmony default export */ __webpack_exports__["default"] = (InstructionModal);

/***/ })
/******/ ]);