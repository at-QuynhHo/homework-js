function isDivisibleBy3(str){
  var arr0 = ['0', '3', '6', '9'];
  var arr1 = ['2', '5', '8'];
  var arr2 = ['1', '4', '7'];
  var result;
  var sum = 0;
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) !== "*") { sum += Number(str.charAt(i)); }
  }
  if (sum % 3 === 0) { result = arr0.map((item) => str.replace("*", item));
  } else if (sum % 3 === 1) {
    result = arr1.map((item) => str.replace("*", item));
  } else {
    result = arr2.map((item) => str.replace("*", item));
  }
  return result;
}



console.log(isDivisibleBy3("1*9"));
console.log(isDivisibleBy3("1234567890*"));