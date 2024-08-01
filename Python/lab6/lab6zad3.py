zbior = set()
n = int(input('Podaj liczbę elementów zbioru: '))
for a in range (0,n):
    x = input(f'Podaj {1+a} element zbioru: ')
    zbior.add(x)

podzbiory = [[]]

for element in zbior:
    podzbior_roboczy = [podzbior + [element] for podzbior in podzbiory]
    podzbiory.extend(podzbior_roboczy)

print(podzbiory)
