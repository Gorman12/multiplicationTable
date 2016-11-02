function Table(num1, num2, answer) {
  this.num1 = num1;
  this.num2 = num2;
  this.answer = answer;
}

Table.prototype.multiply = function() {
  this.answer = this.num1 * this.num2;
}

Table.prototype.newNumber = function() {
  this.num1 = Math.floor((Math.random()* 12) +1);
  this.num2 = Math.floor((Math.random()* 12) +1);
}

var table = new Table(0,0,0);
var missedIt1 = [];
var missedIt2 = [];

////////////////////////////////////

$(document).ready(function() {
  $(table.newNumber());
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
    $(table.newNumber());
    $("#number1").append(table.num1);
    $("#number2").append(table.num2);
    $(".product").hide();
    $(".multipliers").show();
  });

  $("#missedIt").click(function() {
    (missedIt1.push(table.num1));
    (missedIt2.push(table.num2));
    $("#number1").empty();
    $("#number2").empty();
    $("#answer").empty();
    $(table.newNumber());
    $("#number1").append(table.num1);
    $("#number2").append(table.num2);
    $(".product").hide();
    $(".multipliers").show();
  });
});
