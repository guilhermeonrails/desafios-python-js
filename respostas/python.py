# 1
# Crie uma função que receba dois números como argumentos e retorne a soma deles.
def sum(a, b):
    return a + b

print(sum(3, 2))   # Saída: 5
print(sum(-3, -6)) # Saída: -9


# 2
# Crie uma função que receba a idade em anos e retorne a idade em dias.
def calc_age(idade):
    return idade * 365

print(calc_age(65)) # Saída: 23725
print(calc_age(33)) # Saída: 12045


# 3  
# Você está contando pontos para um jogo de basquete. Dada a quantidade de cestas de 2 e 3 pontos marcadas, encontre os pontos finais do time e retorne esse valor.
def points(pontos_de_2, pontos_de_3):
    return (pontos_de_2 * 2) + (pontos_de_3 * 3)

print(points(1, 1))  # Saída: 5
print(points(7, 5))  # Saída: 29


# 4
# Crie uma função que retorna o número de true valores que existem em uma matriz.
def count_true(lst):
    return len([value for value in lst if value])

print(count_true([False, False, False, True, False, True]))  # Saída: 2



# 5
# Crie uma função que imprima os primeiros n números da sequência de Fibonacci.
def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        print(a)
        a, b = b, a + b

fibonacci(4)  # Saída: 0 1 1 2


# 6
# Imprima números de 1 a 100. Para múltiplos de 3, imprima "Fizz" em vez do número. 
def fizzbuzz():
    for i in range(1, 101):
        if i % 3 == 0 and i % 5 == 0:
            print("FizzBuzz")
        elif i % 3 == 0:
            print("Fizz")
        elif i % 5 == 0:
            print("Buzz")
        else:
            print(i)

# Saída: Números de 1 a 100 com "Fizz", "Buzz" e "FizzBuzz" conforme os critérios descritos
fizzbuzz()

# 7
# Crie uma função que calcule o fatorial de um número inteiro positivo n usando recursão.
def factorial(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * factorial(n - 1)
    
print(factorial(3))