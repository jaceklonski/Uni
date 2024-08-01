lista = [64, 34, 25, 12, 90,  22, 11, 70]

n = len(lista)
for i in range(n):
    print('i ', i)
    for j in range(0, n-1-i):
        print('j ', j)
        print('lista[j] ', lista[j],'lista[j+1] ', lista[j+1])
        if lista[j] > lista[j+1]:
            lista[j], lista[j+1] = lista[j+1], lista[j]
            print(lista)
                

# Przykład użycia:

print("Posortowana lista:", lista)