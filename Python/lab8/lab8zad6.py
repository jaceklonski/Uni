def binary(n):
    if n <= 0:
        return ""
    else:
        return binary((n - n % 2) // 2) + str(n % 2)

n = int(input('Podaj liczbę: '))
print(binary(n))