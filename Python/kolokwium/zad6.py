lista = []


with open("LICZBY.txt") as file:
    for i in file:
        i=i.strip('\n')
        if 'ï»¿' in i:
            i=i.strip('ï»¿')
        lista.append(int(i))

print(lista)

n = len(lista)
for i in range(n):
    for j in range(0, n-1-i):
        if lista[j] > lista[j+1]:
            lista[j], lista[j+1] = lista[j+1], lista[j]

print(lista)
            
with open('WYNIKI.txt', 'w') as file2:
    for element in lista:
        file2.write(str(element) + '\n')
