const sumAll = function(num1, num2) 
{
    if(num1 < 0 || num2 < 0 || typeof(num1) != 'number' || typeof(num2) != 'number')
    {
        return 'ERROR';
    }
    if(num1 > num2)
    {
        let temp = num1;
        num1 = num2;
        num2 = temp;
    }
    let suma = 0;
    for(let i = num1; i <= num2; i++)
    {
        suma += i;
    }
    return suma;
};

// Do not edit below this line
module.exports = sumAll;
