print("Obliczanie NWD")
a = int(input("podaj liczbę a: "))
b = int(input("podaj liczbę b: "))
c = a*b
if c == 0:
    print ("Określenie NWD dla 0 jest niemożliwe")
elif a >= b:
    reszta = a%b
    while reszta != 0:
        n_reszta = b%reszta
        b = reszta
        reszta = n_reszta
    print ("NWD: ",b )
else:           
    reszta = b%a
    while reszta != 0:
        n_reszta = b%reszta
        a = reszta
        reszta = n_reszta
    print ("NWD: ",a )
z = input()