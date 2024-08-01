import random

k = int(input("rozmiar listy:"))

lista = []
for a in range(0,k):
    b = random.randrange(1,100)
    lista.append(b)

for a in range (k):
    for b in range (0,k-1-a):
        if lista[b] > lista [b+1]:
           lista[b], lista[b+1] = lista[b+1], lista[b]
            
print(lista)

szukana = int(input("Podaj szukany element: "))


l = 0
p = k-1

def szukaj_index(szukana,lista):
    p = len(lista)
    l = 0
    sr = 0
    while l <= p:
        sr = (l + p)//2
        if lista[sr] == szukana:
            return sr
        if lista[sr] < szukana:
            l = sr + 1
        else:
            p = sr - 1
    return 'brak indexu'

print('index szukanego elementu to', szukaj_index(szukana, lista))

