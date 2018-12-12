// jquery is used for bootstrap
import $ from "jquery";
import 'bootstrap';


import PigGame from "./views/PigGame.js";
import InstructionModal from "./views/InstructionModal";

let pigGame = new PigGame;

// pigGame.initialize();
pigGame.events();
let instructionModal = new InstructionModal();
// Testing-comments
