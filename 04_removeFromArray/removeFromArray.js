const removeFromArray = function(lista, ...items) {
    //los ... antes del ultimo argumento se usan para convertir todos los argumentos opcionales en un array

    //Recorro el array hacia atras para que splice borre y corra el espacio borrado hacia la izquierda
    for(let i = lista.length - 1; i >= 0 ; i--)
    {
        for(let j = 0; j < items.length; j++)
        {
            if(lista[i] === items[j])
            {
                lista.splice(i, 1);
            }
        }
    }

    return lista;
};


// Do not edit below this line
module.exports = removeFromArray;
