x = int(input('podaj x: '))
y = int(input('podaj y: '))
Multi1 = 1
WieloX = set()
WieloY = set()

while True:
    a = x * Multi1
    WieloX.add(a)

    b = y * Multi1
    WieloY.add(b)

    for num in WieloX:
        for num2 in WieloY:
            if num == num2:
                print('NWW: ', num)
                break
        if num == num2:
            break
    if num == num2:
        break

    Multi1 += 1


