const leapYears = function(annio) 
{
    if(((annio % 4 == 0) && (annio % 100 != 0)) || (annio % 400 == 0))
        {
            return true;
        }
        return false;
};

// Do not edit below this line
module.exports = leapYears;
