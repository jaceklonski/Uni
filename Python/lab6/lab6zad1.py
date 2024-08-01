while True:
    n = input('podaj liczbę n: ')
    if int(n) > 1000:
        print('liczba n nie może przekraczać 1000')
    else:
        break

lista = list(range(2,int(n)))

for a in lista:
    if a < int(n)**0.5:
        for b in lista:
            if a != b and b%a == 0:
                lista.remove(b)
    else:
        break

lista.append(1)
print(lista)