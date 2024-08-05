# 1
# Dada uma lista de números, some todos os elementos sem usar métodos built in.
def my_sum_method(lst):
    total = 0
    for num in lst:
        total += num # total = total + num
    
    return total

print(my_sum_method([1,2,3,4]))
print(my_sum_method([]))


# 2
# Escreva uma função que inverta as chaves e os valores de um dicionário.
def invert(dct):
    new_dict = dict()
    for elem in dct:
        key = dct[elem]
        new_dict[key] = elem
    
    return new_dict

print(invert({"z":"q", "w":"f"}))
print(invert({"a":"1", "b":"2"}))


# 3  
# Crie uma função que receba uma lista e uma string. A função deve remover as letras da string da lista e retornar a lista.
def remove_letters(arr, word):
    new_list = []
    for letter in arr:
        if letter not in word:
            new_list.append(letter)
    return new_list

print(remove_letters(['a', 'b', 'c', 'a', 'z', 'e'], 'oca'))
