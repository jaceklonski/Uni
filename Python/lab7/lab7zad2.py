while True:
    x = int(input('do jakiej liczby wygenerować tabliczke mnożenia? (x<11) x= : '))
    if x < 11:
        break

tabliczka_mnozenia = []
mnoznik = []
for liczby in range(1, x+1):
    mnoznik.append(liczby)

for a in range(1, x+1):
    wynik = []
    for b in mnoznik:
        wynik.append(a*b)
    tabliczka_mnozenia.append(wynik)

for wers in range(0,x):
    print (tabliczka_mnozenia[wers])