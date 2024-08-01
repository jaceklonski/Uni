k = 'KONSTANTYNOPOLITANCZYKOWIANECZKA'
print(k)
litera = input('Jakiej litery szukasz w tym słowie?\n')
licznik = 0

for a in k:
    if a.upper() == litera.upper():
        licznik += 1

if licznik > 0:
    print(f'Litera {litera} występuje w słowie {k} {licznik} razy')

else:
    print(f'Litera {litera} nie występuje w wyrazie {k}')