


import base, { instructionElements } from "./base";

class InstructionModal{
    constructor(){
        // DOM Properties
        this.openInstructionModal   = instructionElements.openInstructionModal;
        this.instructionModal       = instructionElements.instructionModal;
        this.instructionModalClose  = instructionElements.instructionModalClose;
        this.document               = document.body;
    

        // Methods
        this.events;
        this.openModal;
        this.closeModal;
        this.keyPressHandler;
    }
    // Order for function to happen.
    events(){

         // Clicking the open Modal openModalButton
       this.openInstructionModal.addEventListener('click', () => this.openModal());
       
        // Clicking the x close modal openModalButton
        this.instructionModalClose.addEventListener('click', () => this.closeModal());

        // pushes any key
        this.document.addEventListener('keydown', () => this.keyPressHandler(event));
    }
    // Pushes any key to close  
    keyPressHandler(event){
        if(event.which == 27){
        this.closeModal();
        }
    }
    
    // Open modal
    openModal(){
        this.instructionModal.classList.add("instruction-modal--is-visible");
        return false;
    }
    // Close modal
    closeModal(){
        this.instructionModal.classList.remove("instruction-modal--is-visible");
    }
}

export default InstructionModal;