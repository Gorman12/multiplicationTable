var missedIt1 = [];
var missedIt2 = [];
var index;
var numberRange;
var multipliers = [];


function Table(num1, num2, answer) {
  this.num1 = num1;
  this.num2 = num2;
  this.answer = answer;
}

var numberInput = function(){
  for(i = 0; i <= (multipliers.length - 1); i++){
    return multipliers[i];
  }
};

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
  } else if ((i === 2) && (missedIt.length >= 1)) {
    var point = Math.floor(Math.random() * missedIt1.length);
    this.num1 = missedIt1[point];
    this.num2 = missedIt2[point];
    index = point;
  } else {
    this.num1 = numberInput();
    this.num2 = Math.floor((Math.random()* 12) +1);
  }
}




///////////////////////////////////////////////////////////////

$(document).ready(function() {

  $("button#submit").click(function(event){
    event.preventDefault();
    $("input:checkbox[name=numbers]:checked").each(function(){
      numberRange = $(this).val();
      multipliers.push(parseInt(numberRange));
    });

    var table = new Table(0,0,0);

    $("form#selectMultipliers").hide();
    table.newNumber();
    $("#number1").append(table.num1);
    $("#number2").append(table.num2);


    table.multiply();
    $(".multipliers").hide();
    $(".product").show();
    $("#answer").append(table.answer);
  });
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
    alert(missedIt1);
    alert(missedIt2);
    $("#number1").append(table.num1);
    $("#number2").append(table.num2);
    $(".product").hide();
    $(".multipliers").show();
  });
