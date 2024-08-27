const findTheOldest = function(people) 
{
    let persona = '';
    let mayor = 0;
    for(let pip of people)
    {
        if(!pip.yearOfDeath)
        {
            pip.yearOfDeath = new Date().getFullYear();
        }
        let annios = pip.yearOfDeath - pip.yearOfBirth;
        if( annios > mayor)
        {
            mayor = annios;
            persona = pip.name;
        }
        pip.name = persona;
    }

    return persona;
};

// Do not edit below this line
module.exports = findTheOldest;
