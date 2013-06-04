$(document).ready(function(){

  // starting balance
  var checking_balance = 1000;
  var saving_balance = 2000;
  // show starting balance on page
  $("#c_balance").text(checking_balance);
  $("#s_balance").text(saving_balance);

  
	function c_dep(event) {
		event.preventDefault();
    var c_input = parseInt($("#c_input").val(),10);
    checking_balance += c_input;
    $("#c_balance").text(checking_balance);	
  }

  function c_with(event) {
		event.preventDefault();
    var c_input = parseInt($("#c_input").val(),10);
    var total_money = checking_balance + saving_balance;
    
    if (c_input < total_money) {
    	if (c_input < checking_balance) {
    	   checking_balance -= c_input;
    	}

      else {
         var howmuchiwant = c_input
         var howmuchihaveinchecking = checking_balance
         var howmuchdoineedtotakefromsavingstogethetotal = (checking_balance - c_input)*-1
         checking_balance -= howmuchihaveinchecking
         saving_balance -= howmuchdoineedtotakefromsavingstogethetotal

      }

      $("#c_balance").text(checking_balance);
      // ! update the checking_balance if you haven't already
     	// ! upate the saving balance if you haven't already
     	// update the interface to show the update balance(s)

      $("#c_balance").text(checking_balance);
      $("#s_balance").text(saving_balance);
 		  
    } else {
    	alert.css("background-color","red")("Sorry. You're out of money.");
    }

  }

  // show starting balance on page
  $("#s_balance").text(saving_balance);

  function s_dep(event) {
		event.preventDefault();
    var s_input = parseInt($("#s_input").val(),10);
    saving_balance += s_input;
    $("#s_balance").text(saving_balance);
  }

  function s_with(event) {
		event.preventDefault();
    var s_input = parseInt($("#s_input").val(),10);

    if (saving_balance - s_input > 0){

	    saving_balance -= s_input;
	    $("#s_balance").text(saving_balance);

	  }

	  else {
	  	alert("Sorry. You've drained your savings.");
	  }
    
  }


  $("#c_d_button").on("click", c_dep);

  $("#c_w_button").on("click", c_with);

  $("#s_d_button").on("click", s_dep);

  $("#s_w_button").on("click", s_with);

});

         














    	