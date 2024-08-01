biblioteka = []
def dodaj_ksiazke():
    tytul = input("Podaj tytuł: ")
    autor = input("Podaj autora: ")
    wydawnictwo = input("Podaj wydawnictwo: ")
    rok_wydania = input("Podaj rok wydania: ")

    ksiazka = {'tytul': tytul, 'autor': autor, 'wydawnictwo': wydawnictwo, 'rok_wydania': rok_wydania}
    biblioteka.append(ksiazka)
    print("Książka dodana do bazy.")



def usun_ksiazke():
    tytul = input("Podaj tytuł książki do usunięcia: ")

    for ksiazka in biblioteka:
        if ksiazka['tytul'] == tytul:
            biblioteka.remove(ksiazka)
            print("Książka usunięta z bazy.")
            return

    print("Nie znaleziono książki o podanym tytule.")


def edytuj_ksiazke():
    tytul = input("Podaj tytuł książki, którą chcesz edytować: ")

    for ksiazka in biblioteka:
        if ksiazka['tytul'] == tytul:
            tytul = input("Podaj nowy tytuł: ")
            autor = input("Podaj nowego autora: ")
            wydawnictwo = input("Podaj nowe wydawnictwo: ")
            rok_wydania = input("Podaj nowy rok wydania: ")

            ksiazka = {'tytul': tytul, 'autor': autor, 'wydawnictwo': wydawnictwo, 'rok_wydania': rok_wydania}
            biblioteka.append(ksiazka)
            print("Edycja książki zakończona")
            return


def wyszukaj_ksiazke():
    wyniki_wyszukiwania = []
    x = input('''Szukaj książki:
              1. Za pomocą Tytułu
              2. Za pomocą Autora
              3. Za pomocą Wydawnictwa
              4. Za pomocą Roku Wydania
              :> ''')
    
    if x == '1':
        tytul = input("Podaj tytuł książki, którą chcesz znaleźć: ")

        for ksiazka in biblioteka:
            if ksiazka['tytul'] == tytul:
                wyniki_wyszukiwania.append(ksiazka)
        
        print(f'Książki o tytule {tytul} ', wyniki_wyszukiwania)

    if x == '2':
        autor = input("Podaj Autora książki, którą chcesz znaleźć: ")

        for ksiazka in biblioteka:
            if ksiazka['autor'] == autor:
                wyniki_wyszukiwania.append(ksiazka)
        
        print(f'Książki napisane przez {autor} ', wyniki_wyszukiwania)
 
    if x == '3':
        wydawnictwo = input("Podaj wydawnictwo książki, którą chcesz znaleźć: ")

        for ksiazka in biblioteka:
            if ksiazka['wydawnictwo'] == wydawnictwo:
                wyniki_wyszukiwania.append(ksiazka)
        
        print(f'Książki wydane przez {wydawnictwo} ', wyniki_wyszukiwania)
   
    if x == '4':
        rok_wydania = input("Podaj rok wydania książki, którą chcesz znaleźć: ")

        for ksiazka in biblioteka:
            if ksiazka['rok_wydania'] == rok_wydania:
                wyniki_wyszukiwania.append(ksiazka)
        
        print(f'Książki wydane w {rok_wydania} roku ', wyniki_wyszukiwania)


while True:
    print('''Menu:
    1. Dodaj książkę
    2. Usuń książkę
    3. Edytuj książkę
    4. Wyszukaj książkę''')

    wybor = input("Wybierz: ")

    if wybor == '1':
        dodaj_ksiazke()
    elif wybor == '2':
        usun_ksiazke()
    elif wybor == '3':
        edytuj_ksiazke()
    elif wybor == '4':
        wyszukaj_ksiazke()
    else:
        print("Nieprawidłowy wybór. Spróbuj ponownie.")


