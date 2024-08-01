while True:
    vector1 = input('podaj wektor 1:')
    vector2 = input('podaj wektor 2:')
    odpowiedz = []

    if len(vector1) != len(vector2):
        print('wektory nie są takiej samej wielkości')
    else:
        break

vector1 = vector1[1:-1].replace(' ', '')
vector2 = vector2[1:-1].replace(' ', '')

elementy1 = vector1.split(",")
elementy2 = vector2.split(",")
x = len(elementy1)

for i in range (0,x):
    y = int(elementy1[i]) * int(elementy2[i])
    odpowiedz.append(y)

print(odpowiedz)

    

