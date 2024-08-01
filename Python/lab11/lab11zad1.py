import numpy

dzialania = [
'dodawanie',
'odejmowanie',
'mnożenie',
'dzielenie',
'dzielenie modulo n',
'potęgowanie',
'pierwiastkowanie',
'silnia n',
'logarytmowanie (użytkownik ma podawć podstawę logarytmu oraz liczbę logarytmowaną)',
'wartość funkcji sinus',
'wartość funkcji cosinus',
'wartość funkcji tangens',
'wartość funkcji cotangens'
]

while True:
    
    print('Wybierz działanie')
    for a in range(len(dzialania)):
        print(a+1,')', dzialania[a])

    selector = int(input('>>'))
    print('Wybrałeś:')

#1 Dodawanie
    if selector == 1:
        print('Dodawanie')
        skladnik_a = int(input('podaj liczbę: '))
        skladnik_b = int(input(f'podaj liczbę: {skladnik_a} + '))
        suma = numpy.add(skladnik_a,skladnik_b)
        print(f'Wynik: {skladnik_a} + {skladnik_b} = {suma}')
        selector = 0
        input('Naciśnij dowolny przycisk, aby wrócić do menu:\n')
        

#2 Odejmowanie
    if selector == 2:
        print('Odejmowanie')
        liczba_a = int(input('podaj liczbę: '))
        liczba_b = int(input(f'podaj liczbę: {liczba_a} - '))
        wynik = numpy.subtract(liczba_a,liczba_b)
        print(f'Wynik: {liczba_a} - {liczba_b} = {wynik}')
        selector = 0
        input('Naciśnij dowolny przycisk, aby wrócić do menu:\n')

#3 mnozenie
    if selector == 3:
        print('Mnozenie')
        liczba_a = int(input('podaj liczbę: '))
        liczba_b = int(input(f'podaj liczbę: {liczba_a} * '))
        wynik = numpy.multiply(liczba_a,liczba_b)
        print(f'Wynik: {liczba_a} * {liczba_b} = {wynik}')
        selector = 0
        input('Naciśnij dowolny przycisk, aby wrócić do menu:\n')

# dzielenie
    if selector == 4:
        print('Dzielenie')
        liczba_a = int(input('podaj liczbę: '))
        liczba_b = int(input(f'podaj liczbę: {liczba_a} : '))
        wynik = numpy.divide(liczba_a,liczba_b)
        print(f'Wynik: {liczba_a} : {liczba_b} = {wynik}')
        selector = 0
        input('Naciśnij dowolny przycisk, aby wrócić do menu:\n')

# dzielenie mod
    if selector == 5:
        print('Dzielenie Modulo')
        liczba_a = int(input('podaj liczbę: '))
        liczba_b = int(input(f'podaj liczbę: {liczba_a}mod'))
        wynik = numpy.divmod(liczba_a,liczba_b)
        print(f'Wynik: {liczba_a}mod{liczba_b} = {wynik}')
        selector = 0
        input('Naciśnij dowolny przycisk, aby wrócić do menu:\n')

# Potegowanie
    if selector == 6:
        print('Potegowanie')
        liczba_a = int(input('podaj liczbę: '))
        liczba_b = int(input(f'podaj liczbę: {liczba_a}^'))
        wynik = numpy.power(liczba_a,liczba_b)
        print(f'Wynik: {liczba_a}^{liczba_b} = {wynik}')
        selector = 0
        input('Naciśnij dowolny przycisk, aby wrócić do menu:\n')

# Pierwiastkowanie
    if selector == 7:
        print('Pierwiastkowanie')
        liczba_a = int(input('podaj liczbę: '))
        liczba_b = int(input(f'podaj liczbę: {liczba_a}^1/'))
        wynik = numpy.power(liczba_a, 1/liczba_b)
        print(f'Wynik: {liczba_a}  {liczba_b} = {wynik}')
        selector = 0
        input('Naciśnij dowolny przycisk, aby wrócić do menu:\n')

# silnia
    if selector == 8:
        print('Silnia')
        liczba_a = int(input('podaj liczbę: '))
        wynik = 1
        for a in range (1,liczba_a+1):
            wynik = wynik * a
        print(f'Wynik: {liczba_a}! = {wynik}')
        selector = 0
        input('Naciśnij dowolny przycisk, aby wrócić do menu:\n')

# log
    if selector == 9:
        print('Logarytm')
        liczba_a = int(input('podaj liczbę: log('))
        liczba_b = int(input(f'podaj liczbę: log({liczba_a}, '))
        wynik = numpy.log(liczba_a) / numpy.log(liczba_b)
        print(f'Wynik: log({liczba_a,liczba_b}) = {wynik}')
        selector = 0
        input('Naciśnij dowolny przycisk, aby wrócić do menu:\n')

# sin
    if selector == 10:
        print('Wartość funkcji Sin')
        liczba_a = int(input('podaj liczbę: '))
        wynik = numpy.sin(liczba_a)
        print(f'Wynik: sin({liczba_a}) = {wynik}')
        selector = 0
        input('Naciśnij dowolny przycisk, aby wrócić do menu:\n')
    
# cos
    if selector == 11:
        print('Wartość funkcji cos')
        liczba_a = int(input('podaj liczbę: '))
        wynik = numpy.cos(liczba_a)
        print(f'Wynik: cos({liczba_a}) = {wynik}')
        selector = 0
        input('Naciśnij dowolny przycisk, aby wrócić do menu:\n')

# tan
    if selector == 12:
        print('Wartość funkcji tg')
        liczba_a = int(input('podaj liczbę: '))
        wynik = numpy.tan(liczba_a)
        print(f'Wynik: tg({liczba_a}) = {wynik}')
        selector = 0
        input('Naciśnij dowolny przycisk, aby wrócić do menu:\n')

# ctan
    if selector == 13:
        print('Wartość funkcji ctg')
        liczba_a = float(input('podaj liczbę: '))
        liczba_a += numpy.pi
        wynik = numpy.tan(liczba_a)
        print(f'Wynik: ctg({liczba_a}) = {wynik}')
        selector = 0
        input('Naciśnij dowolny przycisk, aby wrócić do menu:\n')
    print('====================================================================================')
