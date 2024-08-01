slowo = input('podaj słowo do zaszyfrowania: ')
klucz = int(input('podaj liczbę, która bedzie kluczem: '))
alfabet = list(chr(i) for i in range(ord('a'), ord('z') + 1))
szyf_slowo = ''

for litera in slowo:
    index = alfabet.index(litera)
    index_2 = index + klucz
    if index_2 > 26:
        index_2 =  index_2 - 26
    
    szyf_slowo += alfabet[index_2]

print('zaszyfrowane słowo: ', szyf_slowo)
