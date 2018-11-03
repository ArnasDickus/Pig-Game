
import $ from "jquery";


class InstructionModal{
    constructor(){
        this.openInstructionModal = $(".open-instruction-modal");
        this.instructionModal = $(".instruction-modal");
        this.instructionModalClose = $(".instruction-modal__close");
        this.events();
    }
    events(){
         // Clicking the open Modal openModalButton
        this.openInstructionModal.click(this.openModal.bind(this));

        // Clicking the x close modal openModalButton
        this.instructionModalClose.click(this.closeModal.bind(this));

        // pushes any key
        $(document).keyup(this.keyPressHandler.bind(this));
    }

    keyPressHandler(e){
        if(e.keyCode == 27){
        this.closeModal();
        }
    }

    openModal(){
        this.instructionModal.addClass("instruction-modal--is-visible");
        return false;
    }
    closeModal(){
        this.instructionModal.removeClass("instruction-modal--is-visible");
    }
}

export default InstructionModal;