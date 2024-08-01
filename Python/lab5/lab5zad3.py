lista = []
while True:
    x = input('podaj wyraz :')
    if x == "0":
        break
    lista.append(x)
lista.sort()


print(lista)
