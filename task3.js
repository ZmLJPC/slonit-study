let obj = {
    name: 'Vasya',
    friends: 5,
    likes: 19,
    projects: 7,
    proccessNumericItems: function(returnKeys = false) {
        let toReturn = (returnKeys) ? [] : 0;
        for (let key in this) {
            if (typeof(this[key]) == "number") {
                (returnKeys) ? toReturn.push(key) : toReturn += this[key];
            }
        }
    
        return (returnKeys) ? toReturn.sort().reverse() : toReturn;
    }
}

console.log(obj.proccessNumericItems()) // 31
console.log(obj.proccessNumericItems(true)) // [ 'projects', 'likes', 'friends' ]