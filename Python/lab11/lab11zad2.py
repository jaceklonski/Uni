import numpy

n = int(input('podaj długość tablicy:'))
biblioteka = numpy.arange(1,n+1)

print('Oryginalna Tablica:', biblioteka)

print('możliwe macierze:')
for i in range(1, n + 1):
        if n % i == 0:
            macierz = biblioteka.reshape(i, n // i)
            print(macierz)
