const PLAYER_1 = "Компьютер 1";
const PLAYER_2 = "Компьютер 2";

function getRandomNumber(from, to) {
    return Math.floor((Math.random() * to)) + from;
}

function generateRangeArray(from, to) {
    let result = [];
    for (let i = from; i <= to; i++) {
        result.push(i);
    }
    return result;
}

function startGame(arr, target) {
    let length = arr.length
        , left = arr[0]
        , right = arr[length-1]
        , step = 0;

    while (left <= right) {
        step++;
        let mid = Math.floor((left + right) / 2)
        console.log(`${PLAYER_2}: Пробую число ${arr[mid]}`);
        if (target == arr[mid]) {
            console.log(`${PLAYER_1}: Угадал!`);
            return true;
        }
        else if (target < arr[mid]) {
            console.log(`${PLAYER_1}: Меньше`);
            right = mid - 1;
        }
        else {
            console.log(`${PLAYER_1}: Больше`);
            left = mid + 1;
        }
    }

    console.log(`${PLAYER_2}: Твоего числа нет в таком диапазоне`);
    console.log(`${PLAYER_1}: Правильный ответ был ${target}`);
    return false;
}

let numberToGuess = getRandomNumber(0, 100);
console.log(`${PLAYER_1}: Я загадал некоторое число от 0 до 100`);
let obj = generateRangeArray(0, 100);
startGame(generateRangeArray(0, 100), numberToGuess);