![alt text](https://github.com/guilhermeonrails/desafios-python-js/blob/main/respostas/image.png)

## Teste de Mesa da Função `factorial`

A função `factorial` é usada para calcular o fatorial de um número inteiro positivo `n` usando recursão. O fatorial de um número `n` (denotado por `n!`) é o produto de todos os números inteiros positivos menores ou iguais a `n`. Por exemplo, o fatorial de 5 (5!) é `5 × 4 × 3 × 2 × 1 = 120`.

### Passo a Passo

**Chamada Inicial: `factorial(3)`**

1. **Chamada Inicial: `factorial(3)`**
   - `n` é 3, que não é 0 nem 1.
   - A função chama a si mesma com o argumento `3 - 1`, ou seja, `factorial(2)`.

2. **Chamada Recursiva: `factorial(2)`**
   - `n` é 2, que não é 0 nem 1.
   - A função chama a si mesma com o argumento `2 - 1`, ou seja, `factorial(1)`.

3. **Chamada Recursiva: `factorial(1)`**
   - `n` é 1, que é igual a 1.
   - O caso base é atingido, então a função retorna 1.

4. **Retorno para `factorial(2)`**
   - A chamada `factorial(2)` recebe o valor de `factorial(1)`, que é 1.
   - A expressão `2 * factorial(1)` se torna `2 * 1`, resultando em 2.
   - A função `factorial(2)` retorna 2.

5. **Retorno para `factorial(3)`**
   - A chamada `factorial(3)` recebe o valor de `factorial(2)`, que é 2.
   - A expressão `3 * factorial(2)` se torna `3 * 2`, resultando em 6.
   - A função `factorial(3)` retorna 6.

### Resultado

A chamada `console.log(factorial(3))` imprimirá `6`, que é o fatorial de 3.



