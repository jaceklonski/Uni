wyrazenie = input('podaj wyrażenie: ') + ' '
y = 0
slowa = 0
for x in wyrazenie:
    y += 1
    if x != ' ' and wyrazenie[y] == ' ':
        slowa += 1
print (slowa)
