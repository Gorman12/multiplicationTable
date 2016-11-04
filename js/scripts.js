var missedIt1 = [];
var missedIt2 = [];
var numbers1 = [1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12];
var numbers2 = [1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12,];
var index;
var total = 0;
var fromNumbersArray;

function random() {
  this.num1 = Math.floor((Math.random()* 12) +1);
  this.num2 = Math.floor((Math.random()* 12) +1);
}


function Table(num1, num2, answer) {
  this.num1 = num1;
  this.num2 = num2;
  this.answer = answer;
}

Table.prototype.multiply = function() {
  this.answer = this.num1 * this.num2;
}

Table.prototype.newNumber = function(missedIt1) {
  var i = Math.floor((Math.random() * 2) +1);
  if (missedIt1.length > 6) {
    var point = Math.floor(Math.random() * missedIt1.length);
    this.num1 = missedIt1[point];
    this.num2 = missedIt2[point];
    index = point;
    fromNumbersArray = false;
  } else if (i < 2 && missedIt1.length >= 1) {
    var point = Math.floor(Math.random() * missedIt1.length);
    this.num1 = missedIt1[point];
    this.num2 = missedIt2[point];
    index = point;
    fromNumbersArray = false
  } else {
    var point = Math.floor(Math.random()* numbers1.length);
    this.num1 = numbers1[point];
    this.num2 = numbers2[point];
    index = point
    fromNumbersArray = true;
  }
}

Table.prototype.firstNumbers = function() {
  var point = Math.floor(Math.random() * numbers1.length)
  this.num1 = numbers1[point];
  this.num2 = numbers2[point];
  fromNumbersArray = true;
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
    if (numbers1.length < 1) {
      alert ("game over!")
    } else {
      if (fromNumbersArray === true) {
        numbers1.splice(index, 1);
        numbers2.splice(index, 1);
      } else {
        missedIt1.splice(index, 1);
        missedIt2.splice(index, 1);
      }
      $("#number1").empty();
      $("#number2").empty();
      $("#answer").empty();
      table.newNumber(missedIt1);
      $("#number1").append(table.num1);
      $("#number2").append(table.num2);
      $(".product").hide();
      $(".multipliers").show();
      alert(numbers1.length);
    }
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
