n = int(input("Podaj liczbę naturalną n: "))

tablica_dodawania = [[(a + b) % n for b in range(n)] for a in range(n)]
tablica_mnozenia = [[(a * b) % n for b in range(n)] for a in range(n)]  

print(f"tablica dodawania modulo {n}:")
for wiersz in tablica_dodawania:
    print(wiersz)

print(f"tablica mnożenia modulo {n}:")
for wiersz in tablica_mnozenia:
    print(wiersz)