const getTheTitles = function(libros)
{
    let listaLibros = [];
    for(let lib of libros)
    {
        listaLibros.push(lib.title);
    }
    return listaLibros;
};

// Do not edit below this line
module.exports = getTheTitles;
