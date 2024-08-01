def odw(slowo):
    if len(slowo) == 0:
        return 0
    else:
        return int(slowo[-1]) + odw(slowo[:-1])

slowo = input('Podaj liczbę: ')
print(odw(slowo))
