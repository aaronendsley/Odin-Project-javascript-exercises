const convertToCelsius = function(farenheit) {
  const CELCIUS = Math.round((farenheit - 32) /(9/5));
  console.log(CELCIUS)
  return CELCIUS;
};

const convertToFahrenheit = function(celcius) {
  const FAHRENHEIT = Math.round(celcius * (9/5) + 32);
  console.log(FAHRENHEIT); 
  return FAHRENHEIT;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
