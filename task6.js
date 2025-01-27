function myFilter(array, func) {
    let toReturn = [];
    for (let i = 0; i < array.length; i++) {
        if (func(array[i])) {
            toReturn.push(array[i]);
        }
    }

    return toReturn;
}

a = [32, 41, 2, 91, 4, 32, 3]

console.log(myFilter(a, x => x % 2 !== 0));
console.log(myFilter(a, x => x < 30));