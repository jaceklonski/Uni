n = int(input("Wpisz liczbę naturalną: "))

for a in range(n):
    row = ""
    for x in range(n):
        if x % 2 ==0:
            row += "1"
        else:
            row += "0"
    print(row)