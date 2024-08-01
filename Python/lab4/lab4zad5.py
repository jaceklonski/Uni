zdanie = input('podaj zdanie: ')
zdanie += ' ' #dodaje spacje gdyby zdanie kończyło się literą
wyrazy = 0
y = 0
for x in zdanie:
    y += 1
    if y >= len(zdanie):
        break
    z = zdanie[y]           #biorę znak jeden dalszy od X
    if x.isalpha() and z.isalpha() == False:    #jeśłi X jest literą, a Z nią nie jest oznacza to że skończyło się słowo
        wyrazy +=1
print('słowa: ', wyrazy)
    