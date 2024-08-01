import random

k = int(input("rozmiar listy:"))

# tworzenie listy
lista = []
for a in range(0,k):
    b = random.randrange(1,100)
    lista.append(b)

#########################################

def minimum(lista):
    i = 0
    j = 0
    
    while j < len(lista):
        if lista[i]<=lista[j]:
            j += 1 
        elif lista[i]>lista[j]:
            i = j
    return(lista[i])

#########################################

def sortuj(lista):
    port_lista = []    
    while len(lista) > 0:
        a = minimum(lista)
        port_lista.append(a)
        lista.remove(a)

    lista = port_lista

    return lista

##########################################
   
print(lista)
print(minimum(lista))
print(sortuj(lista))