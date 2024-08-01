
def poteguj(a, n):
    if n == 0:
        return 1
    else:
        return a * poteguj(a, n-1)


a = int(input('podaj a: '))
n = int(input('podaj n: '))

    
print(poteguj(a, n))