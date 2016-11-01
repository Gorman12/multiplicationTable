function Table(number1, number2, answer) {
  this.num1 = number1;
  this.num2 = number2;
  this.answer = answer;
}

Table.prototype.multiply = function() {
  this.num1 * this.num2 = this.answer;
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
  $("").submit(function(event)  {
    event.preventDefault();

    //$("#").show();

    var num1 = newNumber1();
    var num2 = newNumber2();

  }
}
