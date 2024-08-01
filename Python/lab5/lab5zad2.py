lista1 = [ 1, 2, 3, 4, 5, 6, 7,]
lista2 = [ 2, 4, 6, 8, 10,]
lista3 = []

for a in lista1:
    for b in lista2:
        if a == b:
            lista3.append(a)

print(lista3)