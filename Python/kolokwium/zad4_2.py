lista = []

def LiczbaPermutacji(lista):
    if len(lista) == 1:
        return 1
    else:
        return len(lista) * LiczbaPermutacji(lista[:-1])

while True:
    znak = input('Podaj znak, aby dopisać go do listy, lub wprowadź 0, żeby zakończyć\n>')
    if znak == '0':
        break
    else:
        lista.append(znak)

print(f'lista {lista} ma {LiczbaPermutacji(lista)} permutacji')

