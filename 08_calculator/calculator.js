const add = function(numero1, numero2) 
{
  return numero1 + numero2;
};

const subtract = function(numero1, numero2) 
{
	return numero1 - numero2;
};

const sum = function(numeros) 
{
	let suma = 0;
  for(let i = 0; i < numeros.length; i++)
  {
    suma += numeros[i];
  }
  return suma;
};

const multiply = function(numeros) 
{
  let resultado = 1;
  for(let i = 0; i < numeros.length; i++)
  {
    resultado *= numeros[i];
  }
  return resultado;
};

const power = function(base, exponente)
{
	return Math.pow(base, exponente);
};

const factorial = function(numero)
{
	let resultado = 1;
  for(let i = 1; i <= numero; i++)
  {
    resultado *= i;
  }
  return resultado;
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
