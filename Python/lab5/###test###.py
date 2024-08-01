###test###
lista1 = []
lista2 = []

for i in range (1,101):
    lista1.append(i)

for a in lista1:
    if a%3 == 0:
        lista2.append(a)
    
print(lista2)