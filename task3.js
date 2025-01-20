function proccessNumericItems(obj, returnKeys = false) {
    let toReturn = (returnKeys) ? [] : 0;
    for (let key in obj) {
        if (typeof(obj[key]) == "number") {
            (returnKeys) ? toReturn.push(key) : toReturn += obj[key];
        }
    }

    return (returnKeys) ? toReturn.sort().reverse() : toReturn;
}

let obj = {
    name: 'Vasya',
    friends: 5,
    likes: 19,
    projects: 7
}

console.log(proccessNumericItems(obj)) // 31
console.log(proccessNumericItems(obj, true)) // [ 'projects', 'likes', 'friends' ]