// This is file is for testing application only. You can safely delete it.
import $ from "jquery";


class Testing {
  constructor(){
    this.test();
    this.jq_test();
    this.popper();

  }
  test(){
    console.log("Test success")
  }

 jq_test(){
   $("#hide").click(function(){
         $("#jq_Content").hide();
   });

   $("#show").click(function(){
       $("#jq_Content").show();
   });
 }
 popper(){
   $('[data-toggle="popover"]').popover();
 }

}


export default Testing;
