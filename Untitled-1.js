let consecRegex = /[\*\+-\/]{3,}/
let test = "6*-+8"

console.log(test.match(consecRegex))

console.log(test.match(consecRegex)[test.match(consecRegex).length-1])