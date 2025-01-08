function mySlice(arr, start = 0, end = arr.length) {
    let result = [];
    let length = arr.length

    start = (start < 0) ? length + start : start
    end = (end < 0) ? length + end : end

    for (let i = start; i < end; i++) {
        result.push(arr[i]);
    }

    return result
}

function myIndexOf(arr, item, from = 0) {
    for (let i = from; i < arr.length; i++) {
        if (arr[i] === item) return i;
    }

    return -1;
}

function myIncludes(arr, item, from = 0) {
    for (let i = from, j = arr.length-1; i < j; i++, j--) {
        if (arr[i] === item || arr[j] === item) return true;
        if ((isNaN(arr[i]) || isNaN(arr[j])) && isNaN(item)) return true;
    }

    let mid = (from + arr.length - 1) / 2
    if (arr.length % 2 != 0) {
        return arr[mid] === item;
    }

    return false;
}

console.log(mySlice([4, 2, 1, 6, 3])); // [ 4, 2, 1, 6, 3 ]
console.log(mySlice([4, 2, 1, 6, 3], 2)); // [ 1, 6, 3 ]
console.log(mySlice([4, 2, 1, 6, 3], 2, 4)); // [ 1, 6 ]
console.log(mySlice([4, 2, 1, 6, 3], -1)); // [ 3 ]
console.log(mySlice([4, 2, 1, 6, 3], -3, -1)); // [ 1, 6 ]

console.log(myIndexOf([4, 2, 1, 6, 3], 1)); // 2
console.log(myIndexOf([4, 2, 1, 6, 3], 1, 3)); // -1
console.log(myIndexOf([4, 2, 1, 6, 3, 1], 1)); // 2
console.log(myIndexOf([4, 2, 1, 6, 3, 1], 1, 3)); // 5

console.log(myIncludes([4, 2, 1, 6, 3], 1)); // true
console.log(myIncludes([4, 2, 1, 6, 3], 1, 3)); // false
console.log(myIncludes([4, 2, 1, 6, 3, 1], 0)); // false
console.log(myIncludes([4, 2, 1, 6, 3, 1, NaN], NaN, 3)); // true