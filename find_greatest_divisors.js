  function findDivisors(number) {

  if (isNaN(number)) {
  document.getElementById("result").innerHTML = "invalid input";
  return;
  }

  if (number == 1) {
  document.getElementById("result").innerHTML = 1;
  return;
  }

  number = Math.abs(Math.floor(number));
  var result = number;
  var divisor = 2;
  var divisors = [];
  var modulo;

  //find all divisors
  do 
  {
    modulo = result % divisor;

    if (modulo)
        ++divisor;
    else {
        result = result / divisor;
        divisors.push(divisor);
        divisor = 2;
    }
  } while (result != 1);

  var greatestDivisors;
  var divisor1;
  var divisor2;

  //check if the number is a prime
  if (divisors.length == 1) {
      ++number;
      console.log("Find divisors for: " + number);
      document.getElementById("number").innerHTML = number;
      findDivisors(number);
  }
  else {

  if (divisors.length > 2) {

      var halfIndex = Math.ceil(divisors.length / 2);
      var half1 = divisors.slice(0, halfIndex);
      var half2 = divisors.slice(halfIndex);

      divisor1 = half1.reduce(function (a, b) { return a * b; });
      if (half2.length > 1)
      divisor2 = half2.reduce(function (a, b) { return a * b; });
      else
      divisor2 = half2[0];

      greatestDivisors = [divisor1, divisor2];

      console.log("halfIndex:" + halfIndex);
      console.log("half1:  " + half1);
      console.log("half2:  " + half2);
      console.log("divisors: " + divisor1 + ", " + divisor2);
  }
  else if (divisors.length == 2) {
      divisor1 = divisors[0];
      divisor2 = divisors[1];
  }
  else {
      console.log("prime number went undetected");
      console.log(divisors);
  }

  document.getElementById("result").innerHTML = "Divisors: " + divisors + "<br/>" + 
                                                "Greatest divisors: " + divisor1 + ", " + divisor2 + "<br/>" +
                                                divisor1 + " * " + divisor2 + " = " + divisor1 * divisor2;
  }

  }