def schemat_haszowania_abcx(napis, m):
    wynik = 0
    for litera in napis:
        wynik = wynik * 111 + ord(litera)
    return wynik % m

def slaba_funkcja_haszujaca(napis, m):
    suma_kodow = sum(ord(litera) for litera in napis)
    return suma_kodow % m

def testuj_haszowanie(klucze, m, funkcja_haszujaca):
    tablica_haszujaca = [[] for _ in range(m)] 
    for klucz in klucze:
        indeks = funkcja_haszujaca(klucz, m)
        tablica_haszujaca[indeks].append(klucz)

    ilosc_pustych_list = 0
    maksymalna_dlugosc_listy = 0
    suma_dlugosci_niepustych_list = 0
    
    for podlista in tablica_haszujaca:
        if podlista == []:  # Sprawdzenie, czy lista jest pusta
            ilosc_pustych_list += 1
        else:
            dlugosc_podlisty = len(podlista)
            if dlugosc_podlisty > maksymalna_dlugosc_listy:
                maksymalna_dlugosc_listy = dlugosc_podlisty
            suma_dlugosci_niepustych_list += dlugosc_podlisty


    srednia_dlugosc_niepustych_list = suma_dlugosci_niepustych_list / (m - ilosc_pustych_list)

    return ilosc_pustych_list, maksymalna_dlugosc_listy, srednia_dlugosc_niepustych_list


def testuj_haszowanie_python(klucze, m):
    tablica_haszujaca = [[] for _ in range(m)] 
    for klucz in klucze:
        indeks = hash(klucz) % m  # Poprawka: Indeksowanie za pomocą reszty z dzielenia
        tablica_haszujaca[indeks].append(klucz)

    ilosc_pustych_list = 0,
    maksymalna_dlugosc_listy = 0,
    srednia_dlugosc_niepustych_list = 0,
    
    for podlista in tablica_haszujaca:
        if podlista == []:
            ilosc_pustych_list += 1
        else:
            dlugosc_podlisty = len(podlista)
            if dlugosc_podlisty > maksymalna_dlugosc_listy:
                maksymalna_dlugosc_listy = dlugosc_podlisty
            srednia_dlugosc_niepustych_list += dlugosc_podlisty

        srednia_dlugosc_niepustych_list /= (m - ilosc_pustych_list)

    return ilosc_pustych_list, maksymalna_dlugosc_listy, srednia_dlugosc_niepustych_list

def wczytaj_klucze(nazwa_pliku):
    with open(nazwa_pliku, 'r') as plik:
        return plik.read().splitlines()

klucze = wczytaj_klucze("3700.txt")

m = [17, 1031, 1024]
for mod in m:

    print(f'D{mod}')
    ilosc_pustych_list, maksymalna_dlugosc_listy, srednia_dlugosc_niepustych_list = testuj_haszowanie(klucze, mod, schemat_haszowania_abcx)
    wyniki = {'ilosc_pustych_list': ilosc_pustych_list, 'maksymalna_dlugosc_listy': maksymalna_dlugosc_listy, 'srednia_dlugosc_niepustych_list': srednia_dlugosc_niepustych_list}
    print(wyniki)

    print(f'S{mod}')
    ilosc_pustych_list, maksymalna_dlugosc_listy, srednia_dlugosc_niepustych_list = testuj_haszowanie(klucze, mod, slaba_funkcja_haszujaca)
    wyniki = {'ilosc_pustych_list': ilosc_pustych_list, 'maksymalna_dlugosc_listy': maksymalna_dlugosc_listy, 'srednia_dlugosc_niepustych_list': srednia_dlugosc_niepustych_list}
    print(wyniki)

    print(f'W{mod}')
    ilosc_pustych_list, maksymalna_dlugosc_listy, srednia_dlugosc_niepustych_list = testuj_haszowanie_python(klucze, mod)
    wyniki = {'ilosc_pustych_list': ilosc_pustych_list, 'maksymalna_dlugosc_listy': maksymalna_dlugosc_listy, 'srednia_dlugosc_niepustych_list': srednia_dlugosc_niepustych_list}
    print(wyniki)

# D17
# {'ilosc_pustych_list': 0, 'maksymalna_dlugosc_listy': 246, 'srednia_dlugosc_niepustych_list': 220.23529411764707}
# S17
# {'ilosc_pustych_list': 0, 'maksymalna_dlugosc_listy': 247, 'srednia_dlugosc_niepustych_list': 220.23529411764707}
# W17
# {'ilosc_pustych_list': 0, 'maksymalna_dlugosc_listy': 246, 'srednia_dlugosc_niepustych_list': 220.23529411764707}
# D1031
# {'ilosc_pustych_list': 25, 'maksymalna_dlugosc_listy': 12, 'srednia_dlugosc_niepustych_list': 3.7216699801192843}
# S1031
# {'ilosc_pustych_list': 189, 'maksymalna_dlugosc_listy': 19, 'srednia_dlugosc_niepustych_list': 4.446555819477434}
# W1031
# {'ilosc_pustych_list': 22, 'maksymalna_dlugosc_listy': 13, 'srednia_dlugosc_niepustych_list': 3.7106045589692767}
# D1024
# {'ilosc_pustych_list': 23, 'maksymalna_dlugosc_listy': 11, 'srednia_dlugosc_niepustych_list': 3.74025974025974}
# S1024
# {'ilosc_pustych_list': 180, 'maksymalna_dlugosc_listy': 19, 'srednia_dlugosc_niepustych_list': 4.436018957345971}
# W1024
# {'ilosc_pustych_list': 24, 'maksymalna_dlugosc_listy': 11, 'srednia_dlugosc_niepustych_list': 3.744}
    
# który z rozmiarów tablicy (1031 lub 1024) dawał lepsze wyniki  ==> D lepszy w 1031 3.721, S lepszy w 1024 4.43, W lepszy w 1031, czyli 2:1 dla 1031
# - czy wybór rodzaju funkcji hszującej (W, D, S) wpływał na jakość wyniku ==> dla m = 17 nie za bardzo, dla m = 1031 i 1024 różnica zauważalna gołym okiem