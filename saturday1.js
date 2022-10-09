const today = '10/08/22'

function getDay(var_Date){
const day = var_Date[3] + var_Date[4]
return day
}

function getMonth (var_Date){
    return var_Date[0] + var_Date[1]
}

function getYear (var_Date){
    return var_Date[6] + var_Date[7]
}

function formatDateEurope(varX){
    const formated = 
    getDay(varX) + '/' +
    getMonth(varX) + '/' +
    getYear(varX)

    return formated
}
console.log(formatDateEurope(today))