import numpy as np
import matplotlib.pyplot as plt
import random

n = int(input('liczba rzutów monetą:'))
p = int(input('prawdopodobienstwo wyrzucenia orła (w procentach):'))
s = int(input('liczba prób (powtórzeń):'))

orly = 0
wartosci = [0, 1]
prawdopodobienstwo = [1-(p/100), p/100]


for proby in range (0,p):
    for rzuty in range (0,n):
        wynik = random.choices(wartosci, prawdopodobienstwo)[0]
        if wynik == 1:
            orly += 1

reszki = p*n - orly

slupki = ['Orly', 'Reszki']
wartosci1 = [orly, reszki]

plt.bar(slupki, wartosci1, color='blue')

plt.xlabel('Kategorie')
plt.ylabel('Wartości')
plt.title('Rozkład rzutów monetą')
plt.legend()

plt.show()