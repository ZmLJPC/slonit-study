const SYMBOLS = [' ', ',', '.', '!', '?', '(', ')', ':', ';', '/'];

// Задача 1
function capitalFirstLetter(str) {
    let i = 0;
    while (SYMBOLS.includes(str[i++]));
    let toReturn = str.slice(0, i).toUpperCase();
    toReturn += str.slice(i);
    return toReturn;
}


// Задача 2
function simplifyString(str, until = 40) {
    if (str.length <= until) return str;
    
    let lastValidIndex = until;
    while (lastValidIndex > 0 && !SYMBOLS.includes(str[lastValidIndex])) {
        lastValidIndex--;
    }

    if (lastValidIndex === 0) {
        lastValidIndex = until;
    }
    
    return str.slice(0, lastValidIndex).trim() + "...";
}


// Задача 3
function isStrInStr(str1, str2) {
    if (str1.includes(str2)) return true;
    return str2.includes(str1);
}


let text1 = " !   ,,, i don't know what is capital letter!";
console.log(capitalFirstLetter(text1));

let text2 = "This is absourdly large piece of text, which is needed to be simplified and cut to something more compact. This is what function below have to do";
console.log(simplifyString(text2));
console.log(simplifyString(text2, 48));

let text31 = "text", text32 = "Text is text";
console.log(isStrInStr(text31, text32));
console.log(isStrInStr(text32, "123"));