///////////////////globalVariables/////////////////////



var missedIt1 = [];
var missedIt2 = [];
var numbers1 = [2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9];
var numbers2 = [2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,2,3,4,5,6,7,8,9,2,3,4,5,6,7,8,9,2,3,4,5,6,7,8,9,2,3,4,5,6,7,8,9,2,3,4,5,6,7,8,9,2,3,4,5,6,7,8,9,2,3,4,5,6,7,8,9];
var index;
var fromNumbersArray;
var array1 = [];
var array2 = [];




////////////////businessLogic///////////////////



function Table(num1, num2, answer) {
  this.num1 = num1;
  this.num2 = num2;
  this.answer = answer;
}


Table.prototype.range = function() {
    var input1 = [2,8,3]
    var input2 = 9
    var i;
    var x;

    for (x = 0; x < input1.length; x++) {
      for (i = 0; i < (input2 - 1); i++) {
        array1.push(input1[x]);
      }
      for (i = 0; i < (input2 - 1); i++) {
        var a = i + 2;
        array2.push(a);
      }
    }
}



Table.prototype.firstNumbers = function() {
  var point = Math.floor(Math.random() * numbers1.length)
  this.num1 = numbers1[point];
  this.num2 = numbers2[point];
  fromNumbersArray = true;
}

Table.prototype.multiply = function() {
  this.answer = this.num1 * this.num2;
}

Table.prototype.newNumber = function() {
  var i = Math.floor((Math.random() * 5) +1);
  if (missedIt1.length > 12) {
    var point = Math.floor(Math.random()* missedIt1.length);
    this.num1 = missedIt1[point];
    this.num2 = missedIt2[point];
    index = point;
    fromNumbersArray = false;
  } else if (missedIt1.length > 9 && (i === 1 || i === 2 || i === 3 || i === 4)) {
    var point = Math.floor(Math.random()* missedIt1.length);
    this.num1 = missedIt1[point];
    this.num2 = missedIt2[point];
    index = point;
    fromNumbersArray = false
  } else if (missedIt1.length > 6 && (i === 1 || i === 2 || i === 3)) {
    var point = Math.floor(Math.random()* missedIt1.length);
    this.num1 = missedIt1[point];
    this.num2 = missedIt2[point];
    index = point;
    fromNumbersArray = false
  } else if (missedIt1.length > 3 && (i === 1 || i === 2)) {
    var point = Math.floor(Math.random()* missedIt1.length);
    this.num1 = missedIt1[point];
    this.num2 = missedIt2[point];
    index = point
    fromNumbersArray = false;
  } else if (missedIt1.length >1 && (i === 1)) {
    var point = Math.floor(Math.random()* missedIt1.length);
    this.num1 = missedIt1[point];
    this.num2 = missedIt2[point];
    index = point;
    fromNumbersArray = false;
  } else {
    var point = Math.floor(Math.random()* numbers1.length);
    this.num1 = numbers1[point];
    this.num2 = numbers2[point];
    index = point;
    fromNumbersArray = true;
  }
}



///////////////////User logic/////////////////////////



$(document).ready(function() {
  $(".gameOver").hide();
  var table = new Table(0,0,0);
  table.range();
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
    if (numbers1.length < 2) {
      $(".product").hide();
      $(".gameOver").show();
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
      table.newNumber();
      $("#number1").append(table.num1);
      $("#number2").append(table.num2);
      $(".product").hide();
      $(".multipliers").show();
    }
  });

  $("#missedIt").click(function() {
    missedIt1.push(table.num1);
    missedIt2.push(table.num2);
    $("#number1").empty();
    $("#number2").empty();
    $("#answer").empty();
    table.newNumber();
    $("#number1").append(table.num1);
    $("#number2").append(table.num2);
    $(".product").hide();
    $(".multipliers").show();
  });
});
