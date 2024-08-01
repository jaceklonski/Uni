x = input('podaj ciąg znaków: ')
length_x= len(x)                            #maksymalna długość podciągu
podciagi = []
for i in range (1, length_x + 1):             #długość ciągu
    for y in range (0, length_x):             #index
        z = ''
        length= 0
        while length < i and y + length < length_x:
            z += x[y + length]
            length += 1
        if length == i:
            podciagi.append(z)
print(podciagi)

