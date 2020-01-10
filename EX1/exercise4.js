function isDivisibleBy6(s) {
  var allDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  
  var allPossibleNumbers = allDigits.map(function(digit) {
    return s.replace("*", digit);
  });
  
  var numbersDibisibleBySix = allPossibleNumbers.filter(function(s) {
    return isDivisibleBy2(s) && isDivisibleBy3(s);
  })
  
  return numbersDibisibleBySix;
};

function isDivisibleBy2(s) {
  var lastDigit = Number(s.slice(-1));
  
  return (lastDigit % 2) === 0;
}

function isDivisibleBy3(s) {
  var digits = s.split("")
    .map(Number);
    
  var sum = digits.reduce(function(a, b) {
    return a + b
  });
  
  return (sum % 3) === 0;
}

console.log(isDivisibleBy6("1*9"));
console.log(isDivisibleBy6("1234567890*"));
