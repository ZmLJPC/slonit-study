function simpleCalculator(x, y, operation) {
    return operation(x, y);
}

const sumFunction = function (x, y) {
    return x + y;
}

const difFunction = function (x, y) {
    return x - y;
}

const multFunction = function (x, y) {
    return x * y;
}

const divFunction = function (x, y) {
    return x / y;
}

const operations = {
    sum: sumFunction,
    difference: difFunction,
    multuply: multFunction,
    division: divFunction
}

let option = "sum", x = 50, y = 10;
console.log(simpleCalculator(x, y, operations[option]))

option = "difference"
console.log(simpleCalculator(x, y, operations[option]))

option = "multuply"
console.log(simpleCalculator(x, y, operations[option]))

option = "division"
console.log(simpleCalculator(x, y, operations[option]))