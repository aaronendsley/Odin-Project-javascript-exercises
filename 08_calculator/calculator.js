const add = function(addend1, addend2) {
  return addend1 + addend2;
};

const subtract = function(minuend, subtrahend) {
	return minuend - subtrahend;
};

const sum = function(...arr) {
	if(!arr[0].length) return 0;
  if(arr[0].length === 1) return arr[0][0];
  return arr[0].reduce(function(accum, currVal, index){
    return accum + currVal;
  }, 0)
};

const multiply = function(arr) {
  return arr.reduce(function(accum, currVal){
    return accum * currVal;
  }, 1)
};

const power = function(number, power) {
  return Math.pow(number, power);
};

const factorial = function(factorial) {
  let factorialArray =[factorial];
  let i = factorial
  let product;
  if(!factorial || factorial === 1){
    return 1;
  }

  while(i!== 1){
    i--;
    factorialArray.push(i);
  }

  for(let i = 0; i < factorialArray.length; i++){
    if(!product){
      product = factorialArray[0];
    }else{
      product = product * factorialArray[i];
    }
    if(i === (factorialArray.length-1)) return product;
  }

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
