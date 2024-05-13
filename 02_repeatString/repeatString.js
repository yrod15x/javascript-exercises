const repeatString = function(palabra, numVeces) 
{
    let repetida = '';
    if(numVeces < 0)
    {
        return 'ERROR';
    }
    for(let i = 0; i < numVeces; i++)
    {
        repetida += palabra;
    }

    return repetida;
};

// Do not edit below this line
module.exports = repeatString;
