var missedIt1 = [];
var missedIt2 = [];
var index;


function Table(num1, num2, answer) {
  this.num1 = num1;
  this.num2 = num2;
  this.answer = answer;
}

Table.prototype.multiply = function() {
  this.answer = this.num1 * this.num2;
}

Table.prototype.newNumber = function(missedId1) {
  var i = Math.floor((Math.random() * 2) +1);
  if (missedIt1.length > 4) {
    var point = Math.floor(Math.random() * missedIt1.length);
    this.num1 = missedIt1[point];
    this.num2 = missedIt2[point];
    index = point;
  } else if ((i === 2) && (missedIt1 !== [])) {
    var point = Math.floor(Math.random() * missedIt1.length);
    this.num1 = missedIt1[point];
    this.num2 = missedIt2[point];
    index = point;
  } else {
    this.num1 = Math.floor((Math.random()* 12) +1);
    this.num2 = Math.floor((Math.random()* 12) +1);
  }
}

Table.prototype.firstNumbers = function() {
  this.num1 = Math.floor((Math.random()* 12) +1);
  this.num2 = Math.floor((Math.random()* 12) +1);
}


///////////////////////////////////////////////////////////////



$(document).ready(function() {
  var table = new Table(0,0,0);
  table.firstNumbers();
  $("#number1").append(table.num1);
  $("#number2").append(table.num2);
  $("#submit").click(function(event) {
    event.preventDefault();
    table.multiply();
    $(".multipliers").hide();
    $(".product").show();
    $("#answer").append(table.answer);
  });

  $("#gotIt").click(function() {
    missedIt1.splice(index, 1);
    missedIt2.splice(index, 1);
    $("#number1").empty();
    $("#number2").empty();
    $("#answer").empty();
    table.newNumber(missedIt1);
    $("#number1").append(table.num1);
    $("#number2").append(table.num2);
    $(".product").hide();
    $(".multipliers").show();
  });

  $("#missedIt").click(function() {
    missedIt1.push(table.num1);
    missedIt2.push(table.num2);
    $("#number1").empty();
    $("#number2").empty();
    $("#answer").empty();
    table.newNumber(missedIt1);
    $("#number1").append(table.num1);
    $("#number2").append(table.num2);
    $(".product").hide();
    $(".multipliers").show();
  });
});
