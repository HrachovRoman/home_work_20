// Метод IndexOf
let arr = [2, 5, 9];

function funcIndexOf (param1, param2 = 0) {
    if (param2 >= arr.length) return -1;

    for (let i = param2; i < arr.length; i++) {
        if (param1 === arr[i]) return i; 
        else if (param2 < 0) {
            for (i = arr.length + param2; i < arr.length; i++) {
                if (param1 === arr[i]) return i;
            } 
        }
    } return -1;
} 
console.log(funcIndexOf(2));     // 0
console.log(funcIndexOf(7));     // -1
console.log(funcIndexOf(9, 2));  // 2
console.log(funcIndexOf(2, -1)); // -1
console.log(funcIndexOf(2, -3)); // 0


// Метод LastIndexOf
let arr = [2, 5, 9, 2];

function funcLastIndexOf (param1, param2 = arr.length) {
    if (arr.length + param2 < 0) return -1;
    if (param2 < 0) {
        for (let i = arr.length + param2; i >= 0; i--) {
            if (i === 0 && param1 !== arr[i]) return -1;
            else if (param1 === arr[i]) return i;
        }
    } else {
        for (let i = param2; i >= 0; i--) {
            if (i === 0 && param1 !== arr[i]) return -1;
            else if (param1 === arr[i]) return i;
        }
    }

console.log (funcLastIndexOf(2));     // 3
console.log (funcLastIndexOf(7));     // -1
console.log (funcLastIndexOf(2, 3));  // 3
console.log (funcLastIndexOf(2, 2));  // 0
console.log (funcLastIndexOf(2, -2)); // 0
console.log (funcLastIndexOf(2, -1)); // 3

//Метод find
let arr = [1, 2, 3, 4, 5, 6];

function funcFind (arr, callback) {
    for (let i = 0; i <= arr.length; i++) {
        if (callback(arr[i], i, arr)) return arr[i];
    }
}


console.log(arr.find(item => item > 4)); // 5
console.log(arr.find(item => item >= 9)); // undefined


console.log(funcFind (arr, ((item) => item > 4))); // 5
console.log(funcFind (arr, ((item) => item >= 9))); // undefined

//Метод findIndex
let arr = [1, 2, 3, 4, 5, 6];

function funcFindIndex (arr, callback) {
        for (let i = 0; i <= arr.length - 1; i++) {
            if (callback(arr[i], i, arr)) return i;
        }
        return -1;
    }
        
    console.log(arr.findIndex(item => item > 4)); // 4
    console.log(arr.findIndex(item => item > 9)); // -1
       
    console.log(funcFindIndex (arr, ((item) => item > 4))); // 4
    console.log(funcFindIndex (arr, ((item) => item > 9))); // -1

//Метод includes
let arr = [1, 2, 3, 4, 5, 6];

function funcIncludes (array, param1, param2 = 0) {
    if (param2 >= array.length) return false;
    if (param2 < 0) {
        for (let i = param2 + array.length; i <= array.length - 1; i++) {
            if (param1 === array[i]) return true;
        }
    } else {
        for (let i = param2; i <= array.length; i++) {
            if (param1 === array[i]) return true;
        }
    }
    return false; 
}

console.log(arr.includes(5,  -2)); // true
console.log(arr.includes(2, -2)); // false

console.log(funcIncludes (arr, 5, -2)); // true
console.log(funcIncludes(arr, 2, -2)); // false

//Метод every
let a = [12, 54, 18, 130, 44];

function funcEvery (arr, callback) {
    if (arr.length === 0) return true;
    for (let i = 0; i <= arr.length - 1; i++) {
        if (!callback(arr[i], i, arr)) return false;
        else if (i === arr.length - 1) return true;
    } 
}

console.log(a.every(elem => elem >= 19)); // false
console.log(a.every(elem => elem >= 10)); // true

console.log(funcEvery(a, (elem => elem >= 19))); // false
console.log(funcEvery(a, (elem => elem >= 10))); // true

//Метод some
let a = [12, 5, 8, 1, 4];

function funcSome (arr, callback) {
    if (arr.length === 0) return false;
    for (let i = 0; i <= arr.length - 1; i++) {
        if (callback(arr[i], i, arr)) return true;
        else if (i === arr.length - 1) return false;
    }
}
console.log(a.some(elem => elem > 10)); // true
console.log(a.some(elem => elem < 0)); // false

console.log(funcSome(a, (elem => elem > 10))); // true
console.log(funcSome(a, (elem => elem < 0))); // false