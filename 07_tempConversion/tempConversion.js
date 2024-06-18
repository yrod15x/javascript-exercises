const convertToCelsius = function(temp) 
{
  let tempCelsius = (temp - 32) * 5 / 9;
  if(tempCelsius % 2 != 0)
    {
      return Number(tempCelsius.toFixed(1));
    }
  return tempCelsius;
};

const convertToFahrenheit = function(temp) 
{
  let tempFarenheit = (temp * 1.8) + 32;
  if(tempFarenheit % 2 != 0)
    {
      return Number(tempFarenheit.toFixed(1));
    }
  return tempFarenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
