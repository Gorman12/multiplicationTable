function Table(number1, number2, answer) {
  this.num1 = number1;
  this.num2 = number2;
  this.answer = answer;
}

Table.prototype.multiply = function() {
  this.answer = this.num1 * this.num2;
}

Table.prototype.newNumber1 = function() {
  this.num1 = Math.floor((Math.random()* 12) +1);
}

Table.prototype.newNumber2 = function() {
  this.num2 = Math.floor((Math.random()* 12) +1);
}

var table = new Table(0,0,0);

////////////////////////////////////

$(document).ready(function() {
  $(table.newNumber1());
  $(table.newNumber2());
  $("#number1").append(table.num1);
  $("#number2").append(table.num2);
  $("#submit").click(function(event) {
    event.preventDefault();
    $(table.multiply());
    $(".multipliers").hide();
    $(".product").show();
    $("#answer").append(table.answer);
  });


  $("#gotIt").click(function() {
    $("#number1").empty();
    $("#number2").empty();
    $("#answer").empty();
    $(table.newNumber1());
    $(table.newNumber2());
    $("#number1").append(table.num1);
    $("#number2").append(table.num2);
    $(".product").hide();
    $(".multipliers").show();

  });
  $("#missedIt").click(function() {
    $("#number1").empty();
    $("#number2").empty();
    $("#answer").empty();
    $(table.newNumber1());
    $(table.newNumber2());
    $("#number1").append(table.num1);
    $("#number2").append(table.num2);
    $(".product").hide();
    $(".multipliers").show();
  });
});
