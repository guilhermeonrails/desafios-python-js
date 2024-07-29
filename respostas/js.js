// 1
// Crie uma função que receba dois números como argumentos e retorne a soma deles.
function sum(a, b) {
    return a + b;
}

console.log(sum(3, 2));   // Saída: 5
console.log(sum(-3, -6)); // Saída: -9


// 2
// Crie uma função que receba a idade em anos e retorne a idade em dias.
function calcAge(age) {
    return age * 365;
}

console.log(calcAge(65)); // Saída: 23725
console.log(calcAge(33)); // Saída: 12045


// 3  
// Você está contando pontos para um jogo de basquete. Dada a quantidade de cestas de 2 e 3 pontos marcadas, encontre os pontos finais do time e retorne esse valor.
function points(twoPointers, threePointers) {
    return (twoPointers * 2) + (threePointers * 3);
}

console.log(points(1, 1));  // Saída: 5
console.log(points(7, 5));  // Saída: 29


// 4
// Crie uma função que retorna o número de true valores que existem em uma matriz.
function countTrue(arr) {
    return arr.filter(Boolean).length;
}

console.log(countTrue([false, false, false, true, false, true]));  // Saída: 2


// 5
// Crie uma função que imprima os primeiros n números da sequência de Fibonacci.
function fibonacci(n) {
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
        console.log(a);
        [a, b] = [b, a + b];
    }
}

fibonacci(4);  // Saída: 0 1 1 2


// 6
// Imprima números de 1 a 100. Para múltiplos de 3, imprima "Fizz" em vez do número.
function fizzbuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

// Saída: Números de 1 a 100 com "Fizz", "Buzz" e "FizzBuzz" conforme os critérios descritos
fizzbuzz();


// 7
// Crie uma função que calcule o fatorial de um número inteiro positivo n usando recursão.
function factorial(n) {
    if (n == 0 || n == 1) {
        return 1
    } else {
        return n * factorial(n - 1)
    }
}

console.log(factorial(3))  // Saída: 120 >>> 3 x 2 x 1 = 24