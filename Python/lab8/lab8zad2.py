def silnia(a):
    if a == 0:
        return 1
    else:
        return a * silnia(a-1)
    
a = int(input('podaj a: '))

print(silnia(a))