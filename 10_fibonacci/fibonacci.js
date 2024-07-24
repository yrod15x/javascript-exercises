const fibonacci = function(numero) 
{
    numero = Number(numero);
    if(numero === 0)
    {
        return 0;
    }
    else if(numero < 0)
    {
        return "OOPS";
    }
    

    let fibonaccis = [1, 1];

    for(let i = 1; i < numero; i++)
    {
        fibonaccis.push(fibonaccis[i] + fibonaccis[i - 1]);
    }

    return fibonaccis[numero - 1];
};


// Do not edit below this line
module.exports = fibonacci;
