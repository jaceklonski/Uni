lista = []
with open("liczby.txt", "r") as f:
    for line in f:
        lista.append(int(line))
print(sum(lista))