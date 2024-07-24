const palindromes = function (texto) 
{
    let palin = '';
    let tempText = '';
    let resultado = false;

    texto = texto.toLowerCase();

    for(let i = 0; i < texto.length; i++)
    {
        if((texto.charCodeAt(i) >= 97 && texto.charCodeAt(i) <= 122) || (texto.charCodeAt(i) >= 48 && texto.charCodeAt(i) <= 57))
        {
            tempText += texto[i];   
        }
    }

    for(let i = texto.length - 1; i >= 0; i--)
    {
        if((texto.charCodeAt(i) >= 97 && texto.charCodeAt(i) <= 122) || (texto.charCodeAt(i) >= 48 && texto.charCodeAt(i) <= 57))
        {
            palin += texto[i];   
        }
    }

    if(palin === tempText)
    {
        resultado = true;
    }

    return resultado ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
