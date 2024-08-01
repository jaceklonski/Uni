def dodaj_cos(slownik):
    nowy_klucz = input('Podaj klucz, który chcesz dodać\n>')
    nowa_wartosc = input('Podaj wartość dla podanego klucza\n>')
    slownik[nowy_klucz] = nowa_wartosc

def usun_slownik(slownik):
    del_klucz = input('Podaj klucz, który chcesz usunąć ze slownika\n>')
    del slownik[del_klucz]

def zmien_cos(slownik):
    nowy_klucz = input('Podaj klucz, który chcesz zmienić\n>')
    nowa_nazwa = input('Podaj nową nazwę klucza\n>')
    nowa_wartosc = input('Podaj nową wartość dla podanego klucza\n>')
    slownik[nowy_klucz] = nowa_wartosc
    slownik[nowa_nazwa] = slownik.pop(nowy_klucz)

przedmiot= {"nazwa": "informatyka","nauczyciel": "John","semestr": "zimowy"}
while True:
    print('1. Dodaj coś do słownika (dowolna nazwa klucza)\n2. Usuń coś ze słownika\n3. Zmodyfikuj coś w słowniku')
    opcja = int(input('Co chcesz zrobić?\n>'))
    if opcja == 1:
        dodaj_cos(przedmiot)
    if opcja == 2:
        usun_slownik(przedmiot)
    if opcja == 3:
        zmien_cos(przedmiot)
    print(przedmiot)