
 var JPY= 127.9
var  USD= 1.2 
var GBP= 0.8



const fromEuroToDollar = (a) => {

    return a * USD
}


const fromDollarToYen = (a) => {

    return a * JPY
}



const fromYenToPound = (a) => {

    return a * GBP
}



module.exports = { fromEuroToDollar,fromYenToPound,fromDollarToYen};