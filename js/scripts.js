var missedIt1 = [];
var missedIt2 = [];
var round;
var index;
var fromNumbersArray;
var numbers1 = [];
var numbers2 = [];
var input1 = [];
var input2 = [];
var point;
var i;
var x;
var y;






////////////////businessLogic///////////////////



function Table(num1, num2, answer) {
  this.num1 = num1;
  this.num2 = num2;
  this.answer = answer;
}

<<<<<<< HEAD
function range() {
  for (x = 0; x < input1.length; x++) {
    for (i = 2; i < (input2 + 1); i++) {
      numbers1.push(input1[x]);
      numbers2.push(i)
    }
  }
}

function initialRange() {
  for (x = 2; x < 10; x++) {
    for (i = 2; i < 10; i++ ) {
      numbers1.push(x);
      numbers2.push(i)
    }
  input1.push(x);
  }
  input2 = 9

Table.prototype.firstNumbers = function() {
  point = Math.floor(Math.random() * numbers1.length)
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
    point = Math.floor(Math.random()* missedIt1.length);
    this.num1 = missedIt1[point];
    this.num2 = missedIt2[point];
    fromNumbersArray = false;
  } else if (missedIt1.length > 9 && (i === 1 || i === 2 || i === 3 || i === 4)) {
    point = Math.floor(Math.random()* missedIt1.length);
    this.num1 = missedIt1[point];
    this.num2 = missedIt2[point];
    fromNumbersArray = false
  } else if (missedIt1.length > 6 && (i === 1 || i === 2 || i === 3)) {
    point = Math.floor(Math.random()* missedIt1.length);
    this.num1 = missedIt1[point];
    this.num2 = missedIt2[point];
    fromNumbersArray = false
  } else if (missedIt1.length > 3 && (i === 1 || i === 2)) {
    point = Math.floor(Math.random()* missedIt1.length);
    this.num1 = missedIt1[point];
    this.num2 = missedIt2[point];
    fromNumbersArray = false;
  } else if (missedIt1.length > 1 && (i === 1)) {
    point = Math.floor(Math.random()* missedIt1.length);
    this.num1 = missedIt1[point];
    this.num2 = missedIt2[point];
    fromNumbersArray = false;
  } else {
    point = Math.floor(Math.random()* numbers1.length);
    this.num1 = numbers1[point];
    this.num2 = numbers2[point];
    fromNumbersArray = true;
  }
}



///////////////////User logic/////////////////////////



$(document).ready(function() {
<<<<<<< HEAD
  var table = new Table(0,0,0);
  initialRange();
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
    if (numbers1.length === 1) {
      input1 = [];
      input2 = 0;
      numbers1 = [];
      numbers2 = [];
      $("input:checkbox[name=practice]:checked").each(function() {
        input1.push(parseInt($(this).val()));
      });
      var a = (parseInt($(".form-control :selected").val()));
      input2 = a;
      $("#number1").empty();
      $("#number2").empty();
      $("#answer").empty();
      range();
      table.newNumber();
      $("#number1").append(table.num1);
      $("#number2").append(table.num2);
      $(".product").hide();
      $(".multipliers").show();
      $(".round").css("color", "white").dequeue();
      $(".round").delay(2000).queue(function() {
      $(this).css("color", "#021605");
      });
    } else {
      if (fromNumbersArray === true) {
        numbers1.splice(point, 1);
        numbers2.splice(point, 1);
      } else {
        missedIt1.splice(point, 1);
        missedIt2.splice(point, 1);
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
  $("#number1").click(function() {
    $(".multipliers").hide();
    $(".leftHand").show();
  });
  $("#number2").click(function() {
    $(".multipliers").hide();
    $(".rightHand").show();
  });
  $("#leftHandButton").click(function() {
    input1 = [];
    numbers1 = [];
    numbers2 = [];
    $("input:checkbox[name=practice]:checked").each(function() {
      input1.push(parseInt($(this).val()));
    });
    $("#number1").empty();
    $("#number2").empty();
    range();
    table.newNumber();
    $("#number1").append(table.num1);
    $("#number2").append(table.num2);
    $(".leftHand").hide();
    $(".multipliers").show();
  });
  $("#rightHandButton").click(function() {
    input2 = 0;
    numbers2 = [];
    numbers1 = [];
    var a = (parseInt($(".form-control :selected").val()));
    input2 = a;
    range();
    $("#number1").empty();
    $("#number2").empty();
    table.newNumber();
    $("#number1").append(table.num1);
    $("#number2").append(table.num2);
    $(".rightHand").hide();
    $(".multipliers").show();
  });
});
