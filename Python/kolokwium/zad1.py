a = int(input('podaj liczbę a:'))
b = int(input('podaj liczbę b:'))

reszta = a%b

if reszta == 0:
    wynik = int(a/b)
    print(f'liczba {a} jest podzielna przez {b}, a wynikiem dzielenia jest {wynik}')

else:
    print(f'liczba {a} nie jest podzielna przez {b}')