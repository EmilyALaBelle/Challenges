function ozToPt(ounces) {
    let pint = ounces * 0.0625
    return pint
}
let ounces = 16
const pint = ozToPt(ounces)
console.log(`${ounces}fl oz is ${pint}pt`)
