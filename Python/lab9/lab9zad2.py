import random

k = int(input("rozmiar listy:"))

# tworzenie listy
lista = []
for a in range(0,k):
    b = random.randrange(1,100)
    lista.append(b)

def sortuj(lista):
    #przypisanie pierwszej wartości do listy
    posortowana_lista = []
    posortowana_lista.append(lista[0])

    #wybranie elementu z listy
    for a in range (1,len(lista)):
        j = 0
        
        #jeśli j nie przekracza długości listy i element listy jest większy od elementu o indexie j zwiększaj j
        while j<len(posortowana_lista) and lista[a] > posortowana_lista[j]:
            j += 1
        
        posortowana_lista.insert(j, lista[a])
    return posortowana_lista

print(sortuj(lista))
    




