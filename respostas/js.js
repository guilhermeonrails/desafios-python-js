// 1
// Crie uma função some os valores de números em uma lista, sem usar métodos built-in.
function mySumMethod(lst) {
    let total = 0;
    for (let num of lst) {
        total += num;
    }
    return total;
}

console.log(mySumMethod([1, 2, 3, 4])); // Saída: 10
console.log(mySumMethod([])); // Saída: 0


// 2
// Inverter um dicionário
function invert(dct) {
    let newDict = {};
    for (let key in dct) {
        let value = dct[key];
        newDict[value] = key;
    }
    return newDict;
}

console.log(invert({ "z": "q", "w": "f" })); // Saída: { q: "z", f: "w" }
console.log(invert({ "a": "1", "b": "2" })); // Saída: { "1": "a", "2": "b" }



// 3  
// Remover letras de uma palavra
function removeLetters(arr, word) {
    let newList = [];
    for (let letter of arr) {
        if (!word.includes(letter)) {
            newList.push(letter);
        }
    }
    return newList;
}

console.log(removeLetters(['a', 'b', 'c', 'e', 'a'], 'apple')); // Saída: ['b', 'c']
console.log(removeLetters([], 'abc')); // Saída: []



