const reverseString = function(texto) {
    let newTexto = '';
    for(let i = texto.length - 1; i >= 0; i--)
    {
        newTexto += texto[i];
    }
    //console.log(newTexto);
    return newTexto;
};

//reverseString('Hello');

// Do not edit below this line
module.exports = reverseString;
