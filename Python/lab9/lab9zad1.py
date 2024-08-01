import random

k = int(input("rozmiar listy:"))

lista = []
for a in range(0,k):
    b = random.randrange(1,100)
    lista.append(b)

for a in range (0,k):
    for b in range (0,k):
        if lista[a] < lista [b]:
            mem = lista[a]
            lista [a] = lista [b]
            lista [b] = mem
            
print(lista)