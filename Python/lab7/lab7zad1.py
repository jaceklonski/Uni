lista = [1, 1, 2, 3, 3, 4, 5, 6, 6]
lista2 = []
for a in range(0,len(lista)):
        for b in range(0,len(lista)):
            if lista[a] == lista[b] and a != b:
                lista2.append(lista[b])
for x in lista2:
    lista.remove(x)
print(lista)
    
    
        

